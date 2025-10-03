import { Router } from "express";
import registerUser from "../controllers/user/register-user.js";
import loginUser from "../controllers/user/login-user.js";
import getUsers from "../controllers/user/get-users.js";
import getUser from "../controllers/user/get-user.js";
import uploadProfilePicture from "../controllers/user/upload-profile-picture.js";
import userProfileImageMiddleware from "../middleware/user-profile-image-middleware.js";

const userRouter = Router();

userRouter
  .post("/register", registerUser)
  .post("/login", loginUser)
  .get("/", getUsers)
  .get("/:id", getUser)
  .patch(
    "/:id/upload-profile-picture",
    userProfileImageMiddleware,
    uploadProfilePicture
  );

export default userRouter;
