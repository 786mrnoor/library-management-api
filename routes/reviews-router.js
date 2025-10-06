import { Router } from "express";
import createReview from "../controllers/review/create-review.js";
import getReviews from "../controllers/review/get-reviews.js";
import removeReview from "../controllers/review/remove-review.js";
import updateReview from "../controllers/review/update-review.js";
import authMiddleware from "../middleware/auth-middleware.js";

const reviewsRouter = Router();

reviewsRouter
  .get('/:id/reviews', getReviews)
  .post('/:id/reviews', authMiddleware, createReview)
  .put('/:id/reviews/:reviewId', authMiddleware, updateReview)
  .delete('/:id/reviews/:reviewId', authMiddleware, removeReview)

export default reviewsRouter;
