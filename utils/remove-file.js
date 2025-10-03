import fs from "fs";

export default function removeFile(path) {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
}
