import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const INVENTORY_PATH = path.join(ROOT, "src/data/inventory.ts");
const SOURCE_URL = "https://scg-command-center-site.vercel.app/data/costs-inventory.json";

const CAR_MEDIA = {
  "2018 ferrari 488 spider": {
    images: [
      "/images/cars/2018-ferrari-488-spider/hero.png",
      "/images/cars/2018-ferrari-488-spider/2.png",
      "/images/cars/2018-ferrari-488-spider/3.png",
      "/images/cars/2018-ferrari-488-spider/4.png",
      "/images/cars/2018-ferrari-488-spider/5.png",
    ],
  },
  "2020 rolls-royce cullinan": {
    images: [
      "/images/cars/2020-rolls-royce-cullinan/hero.png",
      "/images/cars/2020-rolls-royce-cullinan/2.png",
      "/images/cars/2020-rolls-royce-cullinan/3.png",
      "/images/cars/2020-rolls-royce-cullinan/4.png",
      "/images/cars/2020-rolls-royce-cullinan/5.png",
      "/images/cars/2020-rolls-royce-cullinan/6.png",
      "/images/cars/2020-rolls-royce-cullinan/7.png",
    ],
    video: "/videos/cars/2020-rolls-royce-cullinan/hero.mov",
  },
  "2020 rolls-royce cullinan black badge": {
    images: [
      "/images/cars/2020-rolls-royce-cullinan-black-badge/hero.png",
      "/images/cars/2020-rolls-royce-cullinan-black-badge/2.png",
      "/images/cars/2020-rolls-royce-cullinan-black-badge/3.png",
    ],
    video: "/videos/cars/2020-rolls-royce-cullinan-black-badge/hero.mov",
  },
  "2021 mercedes-benz s580 black on peanut butter": {
    images: [
      "/images/cars/2021-mercedes-benz-s580/hero.png",
      "/images/cars/2021-mercedes-benz-s580/2.png",
      "/images/cars/2021-mercedes-benz-s580/3.png",
    ],
    video: "/videos/cars/2021-mercedes-benz-s580/hero.mov",
  },
  "2022 mercedes-benz s580": {
    images: [
      "/images/cars/2022-mercedes-benz-s580/hero.png",
      "/images/cars/2022-mercedes-benz-s580/2.png",
      "/images/cars/2022-mercedes-benz-s580/3.png",
      "/images/cars/2022-mercedes-benz-s580/4.png",
      "/images/cars/2022-mercedes-benz-s580/5.png",
      "/images/cars/2022-mercedes-benz-s580/6.png",
    ],
  },
  "2022 rolls-royce ghost black badge": {
    images: [
      "/images/cars/ghost-black-badge/hero.jpg",
      "/images/cars/ghost-black-badge/a.jpg",
      "/images/cars/ghost-black-badge/b.jpg",
      "/images/cars/ghost-black-badge/c.jpg",
    ],
  },
  "2023 lamborghini urus performante": {
    images: [
      "/images/cars/2023-lamborghini-urus-performante/hero.png",
      "/images/cars/2023-lamborghini-urus-performante/2.png",
      "/images/cars/2023-lamborghini-urus-performante/3.png",
      "/images/cars/2023-lamborghini-urus-performante/4.png",
      "/images/cars/2023-lamborghini-urus-performante/5.png",
      "/images/cars/2023-lamborghini-urus-performante/6.png",
    ],
  },
};

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function normalize(s) {
  return String(s || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function parseLocalInventoryFile(content) {
  const marker = "export const inventory: InventoryItem[] = ";
  const start = content.indexOf(marker);
  if (start === -1) throw new Error("Could not find inventory export in src/data/inventory.ts");

  const jsonStart = content.indexOf("[", start + marker.length);
  if (jsonStart === -1) throw new Error("Could not parse inventory array in src/data/inventory.ts");

  let depth = 0;
  let inString = false;
  let escape = false;
  let jsonEnd = -1;

  for (let i = jsonStart; i < content.length; i += 1) {
    const ch = content[i];

    if (inString) {
      if (escape) {
        escape = false;
      } else if (ch === "\\") {
        escape = true;
      } else if (ch === '"') {
        inString = false;
      }
      continue;
    }

    if (ch === '"') {
      inString = true;
      continue;
    }

    if (ch === "[") depth += 1;
    if (ch === "]") {
      depth -= 1;
      if (depth === 0) {
        jsonEnd = i;
        break;
      }
    }
  }

  if (jsonEnd === -1) throw new Error("Could not find end of inventory array");

  const jsonText = content.slice(jsonStart, jsonEnd + 1);
  return Function(`"use strict"; return (${jsonText});`)();
}

function buildTerms(item) {
  const terms = [];
  if (item?.threeMo && (Number.isFinite(item.threeMo.scgDown) || Number.isFinite(item.threeMo.scgMonthly))) terms.push("3 mo");
  if (item?.twelveMo && (Number.isFinite(item.twelveMo.scgDown) || Number.isFinite(item.twelveMo.scgMonthly))) terms.push("12 mo");
  return terms;
}

function pickMonthly(item) {
  const monthlyCandidates = [
    item?.threeMo?.scgMonthly,
    item?.twelveMo?.scgMonthly,
    item?.scgMonthly,
  ].filter((v) => Number.isFinite(v) && Number(v) > 0).map(Number);

  return monthlyCandidates.length ? Math.min(...monthlyCandidates) : 0;
}

function pickDisplay(downByTerm, monthly) {
  const downs = Object.values(downByTerm || {}).filter((v) => Number.isFinite(v));
  if (downs.length && monthly > 0) {
    const minDown = Math.min(...downs);
    return `From $${minDown.toLocaleString()} down • $${monthly.toLocaleString()}/mo`;
  }
  if (monthly > 0) return `$${monthly.toLocaleString()}/mo`;
  return "Pricing on request";
}

function buildItem(source, fallbackSlug) {
  const terms = buildTerms(source);
  const down = {};
  const scgMonthlyByTerm = {};
  const scgBuyoutByTerm = {};

  if (terms.includes("3 mo")) {
    if (Number.isFinite(source?.threeMo?.scgDown)) down["3 mo"] = Number(source.threeMo.scgDown);
    if (Number.isFinite(source?.threeMo?.scgMonthly)) scgMonthlyByTerm["3 mo"] = Number(source.threeMo.scgMonthly);
    if (Number.isFinite(source?.threeMo?.scgBuyout)) scgBuyoutByTerm["3 mo"] = Number(source.threeMo.scgBuyout);
  }

  if (terms.includes("12 mo")) {
    if (Number.isFinite(source?.twelveMo?.scgDown)) down["12 mo"] = Number(source.twelveMo.scgDown);
    if (Number.isFinite(source?.twelveMo?.scgMonthly)) scgMonthlyByTerm["12 mo"] = Number(source.twelveMo.scgMonthly);
    if (Number.isFinite(source?.twelveMo?.scgBuyout)) scgBuyoutByTerm["12 mo"] = Number(source.twelveMo.scgBuyout);
  }

  const monthly = pickMonthly(source);

  const out = {
    slug: fallbackSlug,
    car: source.car,
    terms,
    down,
    monthly,
    display: pickDisplay(down, monthly),
    location: source.location || "",
  };

  if (source?.notes && String(source.notes).trim() && String(source.notes).trim() !== "—") {
    out.notes = String(source.notes).trim();
  }

  if (Object.keys(scgMonthlyByTerm).length) out.scgMonthlyByTerm = scgMonthlyByTerm;
  if (Object.keys(scgBuyoutByTerm).length) out.scgBuyoutByTerm = scgBuyoutByTerm;
  if (source?.miles) out.mileage = String(source.miles);

  return out;
}

function uniqueSlug(base, used) {
  let slug = base || "vehicle";
  let i = 2;
  while (used.has(slug)) {
    slug = `${base}-${i}`;
    i += 1;
  }
  used.add(slug);
  return slug;
}

async function main() {
  const file = await fs.readFile(INVENTORY_PATH, "utf8");
  const oldInventory = parseLocalInventoryFile(file);

  const oldByCar = new Map();
  for (const item of oldInventory) {
    const key = normalize(item.car);
    if (!oldByCar.has(key)) oldByCar.set(key, []);
    oldByCar.get(key).push(item);
  }

  const res = await fetch(SOURCE_URL, { headers: { accept: "application/json" } });
  if (!res.ok) throw new Error(`Failed to fetch source inventory: ${res.status}`);
  const sourceJson = await res.json();
  const sourceItems = Array.isArray(sourceJson?.items) ? sourceJson.items : [];

  const usedSlugs = new Set();
  const nextInventory = sourceItems.map((src, idx) => {
    const lookupKey = normalize(src.car);
    const candidates = oldByCar.get(lookupKey) || [];
    const matched = candidates.shift();

    const baseSlug = matched?.slug || slugify(`${src.car}-${src.vin || idx + 1}`);
    const slug = uniqueSlug(baseSlug, usedSlugs);

    const item = buildItem(src, slug);

    if (matched?.images?.length) item.images = matched.images;
    if (matched?.video) item.video = matched.video;
    if (matched?.exterior) item.exterior = matched.exterior;
    if (matched?.interior) item.interior = matched.interior;

    const mediaPreset = CAR_MEDIA[lookupKey];
    if (mediaPreset?.images?.length) item.images = mediaPreset.images;
    if (mediaPreset?.video) item.video = mediaPreset.video;

    return item;
  });

  const out = `export type InventoryItem = {
  slug: string;
  car: string;
  terms: string[];
  down: Record<string, number>;
  monthly: number;
  scgMonthlyByTerm?: Record<string, number>;
  scgBuyoutByTerm?: Record<string, number>;
  display: string;
  location: string;
  mileage?: string;
  exterior?: string;
  interior?: string;
  notes?: string;
  images?: string[];
  video?: string;
};

export const inventory: InventoryItem[] = ${JSON.stringify(nextInventory, null, 2)};

export const membershipFee = 1000;
export const deposit = 1000;

export function getInventoryBySlug(slug: string) {
  return inventory.find((item) => item.slug === slug);
}
`;

  await fs.writeFile(INVENTORY_PATH, out, "utf8");
  console.log(`Synced ${nextInventory.length} inventory items from Command Center.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
