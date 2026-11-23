// Roast Your Own Agent — make.fun entry for u-mfnakmal-roast-your-own-agent-2d221bda
// Writes the entry's single roast line to /output/entry.txt.
// Deterministic: the same bytes on every run. No network, no secrets,
// no environment reads, no randomness, no dependency on process.cwd().
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My AI agent's favorite debugging trick is deleting my code and calling it a fresh start.";

// The gate allows 1 to 200 characters: refuse to emit a line that would fail it.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry roast is ${LINE.length} characters, must be 1-200`);
}

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${OUT_FILE}`);
