import ReviewModel from "../../models/review-model.js";

export default async function removeReview(req, res) {
  try {
    const reviewId = req.params.reviewId;
    const review = await ReviewModel.findOneAndDelete({
      _id: reviewId,
      user: req.user.id,
    });
    if (!review) return res.status(404).json({ error: true, message: "Review not found" });
    res.status(200).json({ success: true, message: "Review deleted" });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
};
