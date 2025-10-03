import multerImageUpload from "../config/multer-image.js";

const bookCoverImageMiddleware = multerImageUpload(
  process.env.BOOK_UPLOAD_PATH
).single("avatar");
export default bookCoverImageMiddleware;
