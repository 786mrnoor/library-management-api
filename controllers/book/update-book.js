import BookModel from "../../models/book-model.js";

export default async function updateBook(req, res) {
  try {
    const book = await BookModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        lean: true,
        runValidators: true,
      }
    );
    if (!book)
      return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, data: book });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
