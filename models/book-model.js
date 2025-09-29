import { model, Schema } from "mongoose";

const bookSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true },
    coverUrl: String,
    publishedAt: { type: Date, default: Date.now() },
    availableCopies: { type: Number, default: 1 },
  },
  { timestamps: true }
);

const BookModel = model("Book", bookSchema);

export default BookModel;
