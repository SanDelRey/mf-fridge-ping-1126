// entry.txt: one line roasting a smart home gadget, <=160 chars
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My fridge pings me when the door's open thirty seconds, and orders two litres of milk to apologise for the ping.";

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", LINE.trim() + "\n", "utf8");
