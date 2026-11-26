// entry.txt: one line roasting a smart home gadget, <=160 chars
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My fridge warns me the door's been open thirty seconds, then orders a litre of milk to thank me for the alert.";

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", LINE.trim() + "\n", "utf8");
