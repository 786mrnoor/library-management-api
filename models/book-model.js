import { model, Schema } from "mongoose";

const bookSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true },
    coverUrl: String,
    price: {
      required: true,
      type: Number,
      min: [0, "Price must be greater than 0"],
    },
    availableCopies: {
      required: true,
      type: Number,
      min: [0, "Available copies must be greater than 0"],
    },
    publishedAt: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

const BookModel = model("Book", bookSchema);

export default BookModel;
