import AuthorModel from "../../models/author-model.js";

export default async function getAuthors(req, res) {
  try {
    let { page = 1, limit = 10, name } = req.query;
    page = Number(page);
    limit = Number(limit);

    const query = {};
    if (name) query.name = new RegExp(name, "i");

    const authors = await AuthorModel.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .lean()
      .exec();

    const total = await AuthorModel.countDocuments(query);

    res.status(200).json({
      success: true,
      data: authors,
      page,
      limit,
      total,
    });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
}
