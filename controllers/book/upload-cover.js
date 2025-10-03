import BookModel from "../../models/book-model.js";
import removeFile from "../../utils/remove-file.js";

export default async function uploadCover(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: true, message: "No file uploaded" });
    }

    const book = await BookModel.findById(req.params.id);
    if (!book) {
      // Delete the uploaded file
      removeFile(process.env.BOOK_UPLOAD_PATH + req.filepath);
      return res.status(404).json({ error: true, message: "Book not found" });
    }
    if (book.coverImage) {
      removeFile(process.env.BOOK_UPLOAD_PATH + book.coverImage);
    }

    book.coverImage = req.filepath;
    await book.save();

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
}
