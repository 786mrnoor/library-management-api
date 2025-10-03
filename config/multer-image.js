import multer from "multer";
import path from "path";
import uniqueId from "../utils/unique-id.js";

export default function multerImageUpload(destination) {
  const storage = multer.diskStorage({
    destination,

    filename(req, file, cb) {
      let ext = path.extname(file.originalname);
      const uniqueName = uniqueId() + ext;
      req.filepath = uniqueName;
      cb(null, uniqueName);
    },
  });

  return multer({
    storage,
    fileFilter(req, file, callback) {
      if (file.mimetype.startsWith("image/")) {
        callback(null, true);
      } else {
        callback(new Error("Only image files are allowed.)"), false);
      }
    },
  });
}
