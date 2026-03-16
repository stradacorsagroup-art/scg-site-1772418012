import { execSync } from "node:child_process";

const allowed = new Set(process.argv.slice(2));

if (!allowed.size) {
  console.error("Usage: node scripts/guard-text-only.mjs <allowed-file-1> [allowed-file-2 ...]");
  process.exit(1);
}

const changed = execSync("git status --porcelain", { encoding: "utf8" })
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean)
  .map((line) => line.replace(/^[A-Z? ]+/, "").trim());

const disallowed = changed.filter((file) => !allowed.has(file));

if (disallowed.length) {
  console.error("Text-only guard failed. Disallowed changed files:\n");
  for (const file of disallowed) console.error(`- ${file}`);
  console.error("\nAllowed files were:");
  for (const file of allowed) console.error(`- ${file}`);
  process.exit(1);
}

console.log("Text-only guard passed.");
