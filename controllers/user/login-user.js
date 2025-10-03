import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../../models/user-model.js";

export default async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ error: true, message: "Email and password are required" });

    const user = await UserModel.findOne({ email });
    if (!user)
      return res.status(400).json({ error: true, message: "Email not found." });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res
        .status(400)
        .json({ error: true, message: "Password not matched." });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    return res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status(500).json({ error: true, message: err.message });
  }
}
