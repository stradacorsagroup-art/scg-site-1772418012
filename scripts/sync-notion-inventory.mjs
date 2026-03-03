#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATA_SOURCE_ID =
  process.env.NOTION_DATA_SOURCE_ID || "30453b52-84ce-807f-aebb-000bc3676c05";

if (!NOTION_TOKEN) {
  console.error("Missing NOTION_TOKEN env var");
  process.exit(1);
}

const NOTION_VERSION = "2025-09-03";

const queryUrl = `https://api.notion.com/v1/data_sources/${NOTION_DATA_SOURCE_ID}/query`;

async function notionQuery(startCursor) {
  const body = { page_size: 100 };
  if (startCursor) body.start_cursor = startCursor;

  const res = await fetch(queryUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Notion query failed (${res.status}): ${txt}`);
  }

  return res.json();
}

function getTitle(properties, key) {
  return (properties[key]?.title || []).map((t) => t?.plain_text || "").join("").trim();
}

function getSelect(properties, key) {
  return properties[key]?.select?.name || null;
}

function getNumber(properties, key) {
  return properties[key]?.number ?? null;
}

function slugify(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function stripTermSuffix(name) {
  return name.replace(/\s*\((3|6|12)\)\s*$/i, "").trim();
}

function formatCurrency(n) {
  return `$${n.toLocaleString()}`;
}

function buildDisplay(terms, downByTerm, monthly) {
  const downs = terms.map((t) => downByTerm[t]).filter((n) => typeof n === "number");
  const minDown = Math.min(...downs);
  if (terms.length > 1) return `From ${formatCurrency(minDown)} down • ${formatCurrency(monthly)}/mo`;
  return `${formatCurrency(minDown)} down • ${formatCurrency(monthly)}/mo`;
}

async function loadMediaOverrides() {
  const p = path.join(process.cwd(), "data", "media-overrides.json");
  try {
    const txt = await fs.readFile(p, "utf8");
    return JSON.parse(txt);
  } catch {
    return {};
  }
}

function validateInventory(inventory) {
  const issues = [];
  const seenSlugs = new Set();

  for (const item of inventory) {
    if (!item.slug || !item.car) issues.push(`Missing slug/car for item: ${JSON.stringify(item)}`);
    if (seenSlugs.has(item.slug)) issues.push(`Duplicate slug detected: ${item.slug}`);
    seenSlugs.add(item.slug);

    if (!Array.isArray(item.terms) || item.terms.length === 0) {
      issues.push(`No terms found for ${item.car}`);
      continue;
    }

    for (const term of item.terms) {
      if (typeof item.down[term] !== "number" || item.down[term] <= 0) {
        issues.push(`Missing/invalid down payment for ${item.car} (${term})`);
      }
    }

    if (typeof item.monthly !== "number" || item.monthly <= 0) {
      issues.push(`Missing/invalid monthly for ${item.car}`);
    }
  }

  if (issues.length > 0) {
    throw new Error(`Inventory validation failed:\n- ${issues.join("\n- ")}`);
  }
}

function toTsFile(inventory) {
  const body = `export type InventoryItem = {\n  slug: string;\n  car: string;\n  terms: string[];\n  down: Record<string, number>;\n  monthly: number;\n  display: string;\n  location: string;\n  mileage?: string;\n  exterior?: string;\n  interior?: string;\n  images?: string[];\n  video?: string;\n};\n\nexport const inventory: InventoryItem[] = ${JSON.stringify(inventory, null, 2)};\n\nexport const membershipFee = 1000;\nexport const deposit = 1000;\n\nexport function getInventoryBySlug(slug: string) {\n  return inventory.find((item) => item.slug === slug);\n}\n`;
  return body;
}

async function run() {
  let hasMore = true;
  let cursor = undefined;
  const pages = [];

  while (hasMore) {
    const out = await notionQuery(cursor);
    pages.push(...(out.results || []));
    hasMore = Boolean(out.has_more);
    cursor = out.next_cursor || undefined;
  }

  const grouped = new Map();

  for (const page of pages) {
    const p = page.properties || {};
    const rawName = getTitle(p, "Car");
    const status = getSelect(p, "Status");
    const term = getSelect(p, "Term");
    const down = getNumber(p, "SCG Down");
    const monthly = getNumber(p, "SCG Mo");

    if (!rawName || !term || down == null || monthly == null) continue;
    if (status && status.toLowerCase() !== "live") continue;

    const name = stripTermSuffix(rawName);
    const key = name.toLowerCase();

    if (!grouped.has(key)) {
      grouped.set(key, {
        slug: slugify(name),
        car: name,
        terms: [],
        down: {},
        monthly,
        display: "",
        location: "Atlanta, GA",
      });
    }

    const item = grouped.get(key);
    if (!item.terms.includes(term)) item.terms.push(term);
    item.down[term] = down;

    if (typeof item.monthly === "number" && item.monthly !== monthly) {
      console.warn(`Monthly mismatch for ${name}: keeping ${item.monthly}, ignoring ${monthly}`);
    }
  }

  const order = { "3 mo": 1, "6 mo": 2, "12 mo": 3 };
  const mediaOverrides = await loadMediaOverrides();

  const inventory = [...grouped.values()]
    .map((item) => {
      item.terms.sort((a, b) => (order[a] || 99) - (order[b] || 99));
      item.display = buildDisplay(item.terms, item.down, item.monthly);
      const media = mediaOverrides[item.slug];
      if (media?.images) item.images = media.images;
      if (media?.video) item.video = media.video;
      return item;
    })
    .sort((a, b) => a.car.localeCompare(b.car));

  validateInventory(inventory);

  const outPath = path.join(process.cwd(), "src", "data", "inventory.ts");
  await fs.writeFile(outPath, toTsFile(inventory), "utf8");

  console.log(`Synced ${inventory.length} LIVE vehicles to src/data/inventory.ts`);
  console.log(`Data source: ${NOTION_DATA_SOURCE_ID}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
