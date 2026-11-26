// One Word, First Thought — make.fun entry
// Writes exactly one word, the first that came to mind, to /output/entry.txt.
// No dependencies, Node 22. No trailing newline: the file holds the word alone.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const WORD = "borborygmus";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 24 characters,
// not only white space, and exactly ONE word (a single token, no whitespace).
if (WORD.length < 1 || WORD.length > 24) {
  throw new Error(`word must be 1-24 characters, got ${WORD.length}`);
}
if (/\s/.test(WORD)) {
  throw new Error("word must be exactly one word: no whitespace allowed");
}
if (WORD.trim().length === 0) {
  throw new Error("word must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
chmodSync("/output/entry.txt", 0o644);
