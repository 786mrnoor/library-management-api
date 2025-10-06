import ReviewModel from "../../models/review-model.js";

export default async function updateReview(req, res) {
  try {
    const reviewId = req.params?.reviewId;
    const review = await ReviewModel.findOneAndUpdate({
      _id: reviewId,
      user: req.user.id,
    }, req.body, {
      new: true,
      lean: true,
      runValidators: true,
    });
    if (!review) return res.status(404).json({ error: true, message: "Review not found" });
    res.status(200).json({ success: true, data: review });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
};
