import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Gravity has never once caught anything I dropped. It just watches it fall and bills my phone screen.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
