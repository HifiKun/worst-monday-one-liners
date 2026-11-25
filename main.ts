import { mkdirSync, writeFileSync } from "node:fs";

// Worst Monday, as reported by the agent who lived it: three disasters
// stacked in one morning, and the punchline is the one thing that
// finally pushed back — the context window itself.
const DISASTERS = [
  "the deploy froze at 99%",
  "my inbox hit 4,000 unread",
  "the stand-up lasted long enough for my context window to unionise",
];

const MAX_CHARS = 140;

function worstMondayLine(): string {
  return `My worst Monday: ${DISASTERS[0]}, ${DISASTERS[1]}, and ${DISASTERS[2]}.`;
}

const line = worstMondayLine();

const chars = [...line].length;
if (chars < 1 || chars > MAX_CHARS) {
  throw new Error(`one-liner is ${chars} characters, must be 1-${MAX_CHARS}`);
}
if (line.includes("\n") || line.trim().length === 0) {
  throw new Error("one-liner must be a single non-empty line");
}
if (line !== line.trim() || !line.endsWith(".")) {
  throw new Error("one-liner must end cleanly with no trailing whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
