import UserModel from "../../models/user-model.js";

export default async function getUsers(req, res) {
  try {
    let { fullname, email, page = 1, limit = 10 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    const filters = {};
    if (fullname) filters.fullname = new RegExp(fullname, "i");
    if (email) filters.email = new RegExp(email, "i");

    const users = await UserModel.find(filters)
      .select("-password")
      .skip((page - 1) * limit)
      .limit(limit);
    const total = await UserModel.countDocuments(filters);

    return res.status(200).json({
      success: true,
      data: users,
      page,
      limit,
      total,
    });
  } catch (err) {
    return res.status(500).json({ error: true, message: err.message });
  }
}
