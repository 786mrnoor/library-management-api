import bcrypt from "bcryptjs";
import UserModel from "../../models/user-model.js";
export default async function registerUser(req, res) {
  try {
    const { fullname, email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      fullname,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
      },
    });
  } catch (err) {
    return res.status(500).json({ error: true, message: err.message });
  }
}
