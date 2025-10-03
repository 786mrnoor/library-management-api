import UserModel from "../../models/user-model.js";

export default async function getUser(req, res) {
  try {
    const user = await UserModel.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: true, message: "User not found" });
    }

    return res.status(200).json({ success: true, data: user });
  } catch (err) {
    return res.status(500).json({ error: true, message: err.message });
  }
}
