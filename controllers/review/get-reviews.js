import ReviewModel from "../../models/review-model.js";

export default async function getReviews(req, res) {
  try {
    let { page = 1, limit = 10, rating } = req.query;
    page = Number(page);
    limit = Number(limit);

    const query = {};
    if (rating) query.rating = rating;

    const reviews = await ReviewModel.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .lean()
      .exec();

    const total = await ReviewModel.countDocuments(query);

    res.status(200).json({
      success: true,
      data: reviews,
      page,
      limit,
      total,
    });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
};
