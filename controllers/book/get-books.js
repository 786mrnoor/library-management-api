import BookModel from "../../models/book-model.js";
// GET /books (with pagination + filters)

export default async function getBooks(req, res) {
  try {
    const { page = 1, limit = 10, title, author } = req.query;
    const query = {};

    if (title) query.title = new RegExp(title, "i");
    if (author) query.author = new RegExp(author, "i");

    const books = await BookModel.find(query)
      .skip((Number(page) - 1) * limit)
      .limit(Number(limit));

    const total = await BookModel.countDocuments(query);

    res.json({
      success: true,
      data: books,
      page: Number(page),
      limit: Number(limit),
      total,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
