import BookModel from "../../models/book-model.js";
import removeFile from "../../utils/remove-file.js";

export default async function removeBook(req, res) {
  try {
    const book = await BookModel.findByIdAndDelete(req.params.id);
    if (!book)
      return res.status(404).json({ success: false, message: "Not found" });
    if (book.coverImage) {
      removeFile(process.env.BOOK_UPLOAD_PATH + book.coverImage);
    }
    res.status(200).json({ success: true, message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
