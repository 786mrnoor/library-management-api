import { Router } from "express";
import getBooks from "../controllers/book/get-books.js";
import getBookById from "../controllers/book/get-book.js";
import addBook from "../controllers/book/add-book.js";
import updateBook from "../controllers/book/update-book.js";
import removeBook from "../controllers/book/remove-book.js";

const bookRouter = Router();

bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBookById);
bookRouter.post("/", addBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", removeBook);

export default bookRouter;
