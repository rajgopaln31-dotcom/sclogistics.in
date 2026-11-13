// Downloads every original image listed in src/data/imageManifest.json
// into public/assets/<dir>/<file>. Needs Node 18+ and internet access.
// Usage: npm run download-images
import { mkdir, writeFile, readFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(
  await readFile(path.join(root, "src/data/imageManifest.json"), "utf8"),
);

let ok = 0;
const failed = [];

for (const [file, info] of Object.entries(manifest)) {
  const folder = path.join(root, "public/assets", info.dir);
  const target = path.join(folder, file);
  try {
    await access(target);
    ok += 1;
    continue; // already downloaded
  } catch {
    // not downloaded yet
  }
  try {
    const res = await fetch(info.url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await mkdir(folder, { recursive: true });
    await writeFile(target, Buffer.from(await res.arrayBuffer()));
    ok += 1;
    console.log("saved  ", info.dir + "/" + file);
  } catch (err) {
    failed.push(`${file} (${err.message})`);
    console.log("FAILED ", file, err.message);
  }
}

console.log(`\n${ok} images available, ${failed.length} failed.`);
if (failed.length > 0) {
  console.log("Missing images:\n - " + failed.join("\n - "));
  process.exitCode = 1;
}
