// x-reposts-02-entry: copy POSTS.json from the repository root to the output dir.
// Node 22, standard library only. That is all this program has to do.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(botDir, "POSTS.json");

// Fail fast on a broken list instead of copying garbage downstream:
// the file must parse as JSON and hold a posts array.
const parsed = JSON.parse(readFileSync(source, "utf8"));
if (typeof parsed !== "object" || parsed === null || !Array.isArray(parsed.posts)) {
  throw new Error("POSTS.json must be a JSON object with a posts array");
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "POSTS.json"));
console.log(`Copied POSTS.json with ${parsed.posts.length} post(s) to ${outputDir}`);
