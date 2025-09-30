import BookModel from "../../models/book-model.js";

export default async function addBook(req, res) {
  try {
    const book = await BookModel.create(req.body);
    res.status(201).json({ success: true, data: book });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
