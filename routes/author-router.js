import { Router } from "express";
import addAuthor from "../controllers/author/add-author.js";
import getAuthor from "../controllers/author/get-author.js";
import getAuthors from "../controllers/author/get-authors.js";
import updateAuthor from "../controllers/author/update-author.js";
import removeAuthor from "../controllers/author/remove-author.js";
import authMiddleware from "../middleware/auth-middleware.js";

const authorRouter = Router();

authorRouter
  .get("/", getAuthors)
  .get("/:id", getAuthor)
  .post("/", authMiddleware, addAuthor)
  .put("/:id", authMiddleware, updateAuthor)
  .delete("/:id", authMiddleware, removeAuthor);

export default authorRouter;
