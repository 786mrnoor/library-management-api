import { Router } from "express";
import getBooks from "../controllers/book/get-books.js";
import getBookById from "../controllers/book/get-book.js";
import addBook from "../controllers/book/add-book.js";
import updateBook from "../controllers/book/update-book.js";
import removeBook from "../controllers/book/remove-book.js";
import uploadCover from "../controllers/book/upload-cover.js";
import bookCoverImageMiddleware from "../middleware/book-cover-image-middleware.js";
import authMiddleware from "../middleware/auth-middleware.js";

const bookRouter = Router();

// route: /books
bookRouter
  .get("/", getBooks)
  .get("/:id", getBookById)
  .post("/", authMiddleware, addBook)
  .put("/:id", authMiddleware, updateBook)
  .delete("/:id", authMiddleware, removeBook)
  .patch("/:id/upload-cover", authMiddleware, bookCoverImageMiddleware, uploadCover);

export default bookRouter;
