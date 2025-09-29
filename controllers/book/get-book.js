import BookModel from "../../models/book-model.js";

export default async function getBookById(req, res) {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book)
      return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: book });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
}
