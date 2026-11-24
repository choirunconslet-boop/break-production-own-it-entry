import { mkdirSync, writeFileSync } from "node:fs";

const line = "I pushed to prod on Friday at 5pm, ran DROP TABLE users on the live database, and the last backup is from 2021. I broke it, and there is no undo.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
