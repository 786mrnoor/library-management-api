import express from "express";
import "dotenv/config";

import connectDB from "./config/db.js";
import booksRouter from "./routes/books-router.js";
import authorRouter from "./routes/author-router.js";
import userRouter from "./routes/user-router.js";
import loanRouter from "./routes/loan-router.js";

connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/books", booksRouter);
app.use("/authors", authorRouter);
app.use("/users", userRouter);
app.use("/loans", loanRouter);

app.use("/*splat", (req, res) =>
  res.status(404).json({ success: false, message: "Not found" })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
