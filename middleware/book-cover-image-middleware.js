import multer from "multer";
import path from "path";
import uniqueId from "../utils/unique-id.js";

const storage = multer.diskStorage({
  destination: process.env.BOOK_UPLOAD_PATH,
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    const uniqueName = uniqueId() + ext;
    req.filepath = uniqueName;
    cb(null, uniqueName);
  },
});

function fileFilter(req, file, callback) {
  if (file.mimetype.startsWith("image/")) {
    callback(null, true);
  } else {
    callback(new Error("Only image files are allowed.)"), false);
  }
}

const bookCoverImageMiddleware = multer({ storage, fileFilter }).single(
  "avatar"
);
export default bookCoverImageMiddleware;
