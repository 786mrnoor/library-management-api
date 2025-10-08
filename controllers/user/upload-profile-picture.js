import UserModel from "../../models/user-model.js";
import removeFile from "../../utils/remove-file.js";

export default async function uploadProfilePicture(req, res) {
  try {
    const { id } = req.params;

    if (!req.file) {
      return res.status(400).json({ error: true, message: "No file uploaded" });
    }

    const user = await UserModel.findById(id);
    if (!user) {
      // Delete the uploaded file
      removeFile(process.env.USER_UPLOAD_PATH + req.filepath);
      return res.status(404).json({ error: true, message: "User not found" });
    }

    let previousImage = user.profileImage;
    user.profileImage = req.filepath;
    await user.save();

    if (previousImage) {
      removeFile(process.env.USER_UPLOAD_PATH + previousImage);
    }

    return res.status(200).json({
      success: true,
      profileImage: user.profileImage,
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        profileImage: user.profileImage,
      },
    });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
}
