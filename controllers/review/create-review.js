import BookModel from "../../models/book-model.js";
import ReviewModel from "../../models/review-model.js";

export default async function createReview(req, res) {
  try {
    let { rating, comment } = req.body;
    let bookId = req.params?.id;
    let userId = req.user?.id;

    if (!rating) return res.status(400).json({ error: true, message: "Rating is required" });

    const existingBook = await BookModel.findById(bookId);
    if (!existingBook) return res.status(404).json({ error: true, message: "Book not found" });

    const existingReview = await ReviewModel.findOne({ user: userId, book: bookId });
    if (existingReview) return res.status(400).json({ error: true, message: "Review already exists" });

    const review = await ReviewModel.create({
      user: userId,
      book: bookId,
      rating,
      comment
    });
    res.status(201).json({ success: true, data: review });
  } catch (error) {
    res.status(500).json({ error: true, message: err.message });
  }
};
