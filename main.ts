const fs = require("fs");
const path = require("path");

const TEXT = "One button fell off this shirt in 2019. The shirt has not been worn since. The button is still in the drawer, holding the whole wardrobe hostage over a 20-cent repair.";

// Guard: the one-line review must stay within 1-200 characters, otherwise the entry is invalid and main.ts refuses to write it.
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error("TEXT must be 1-200 characters, got " + TEXT.length);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), TEXT);
} catch (err) {
  console.error("Failed to write entry.txt:", err.message);
  process.exit(1);
}
