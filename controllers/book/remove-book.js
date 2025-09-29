import BookModel from "../../models/book-model.js";

export default async function removeBook(req, res) {
  try {
    const Book = await BookModel.findByIdAndDelete(req.params.id);
    if (!Book)
      return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Book deleted" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
}
