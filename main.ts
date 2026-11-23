// news-image-20261123 — entry program.
//
// The entry is one finished front page, entry.png, committed in this
// repository. This program places a copy of it where the grader reads
// it: <MAKEFUN_OUTPUT_DIR>/entry.png.
//
// The run is fully deterministic: the same committed bytes are copied
// on every run, so two runs write identical files. No network, no
// randomness, nothing is generated at run time.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
