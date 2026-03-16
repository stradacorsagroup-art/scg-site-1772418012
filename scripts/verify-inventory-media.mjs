import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const INVENTORY_PATH = path.join(ROOT, "src/data/inventory.ts");
const PUBLIC_PATH = path.join(ROOT, "public");

function parseInventory(content) {
  const marker = "export const inventory: InventoryItem[] = ";
  const start = content.indexOf(marker);
  if (start === -1) throw new Error("Could not find inventory export.");

  const arrayStart = content.indexOf("[", start + marker.length);
  if (arrayStart === -1) throw new Error("Could not find inventory array start.");

  let depth = 0;
  let inString = false;
  let escape = false;
  let arrayEnd = -1;

  for (let i = arrayStart; i < content.length; i += 1) {
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
        arrayEnd = i;
        break;
      }
    }
  }

  if (arrayEnd === -1) throw new Error("Could not find inventory array end.");

  const literal = content.slice(arrayStart, arrayEnd + 1);
  return Function(`"use strict"; return (${literal});`)();
}

const content = fs.readFileSync(INVENTORY_PATH, "utf8");
const inventory = parseInventory(content);

const problems = [];

for (const item of inventory) {
  const label = `${item.car} (${item.slug})`;

  if (!Array.isArray(item.images) || item.images.length === 0) {
    problems.push(`${label}: missing images array`);
    continue;
  }

  for (const img of item.images) {
    if (typeof img !== "string" || !img.startsWith("/images/")) {
      problems.push(`${label}: invalid image path \"${img}\"`);
      continue;
    }

    const abs = path.join(PUBLIC_PATH, img.replace(/^\//, ""));
    if (!fs.existsSync(abs)) {
      problems.push(`${label}: missing file ${img}`);
    }
  }
}

if (problems.length) {
  console.error("Inventory media guard failed:\n");
  for (const p of problems) console.error(`- ${p}`);
  process.exit(1);
}

console.log(`Inventory media guard passed (${inventory.length} vehicles).`);
