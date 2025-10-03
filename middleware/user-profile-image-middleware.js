import multerImageUpload from "../config/multer-image.js";

const userProfileImageMiddleware = multerImageUpload(
  process.env.USER_UPLOAD_PATH
).single("profile");
export default userProfileImageMiddleware;
