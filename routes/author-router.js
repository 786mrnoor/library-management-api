import { Router } from "express";
import addAuthor from "../controllers/author/add-author.js";
import getAuthor from "../controllers/author/get-author.js";
import getAuthors from "../controllers/author/get-authors.js";
import updateAuthor from "../controllers/author/update-author.js";
import removeAuthor from "../controllers/author/remove-author.js";

const authorRouter = Router();

authorRouter
  .get("/", getAuthors)
  .get("/:id", getAuthor)
  .post("/", addAuthor)
  .put("/:id", updateAuthor)
  .delete("/:id", removeAuthor);

export default authorRouter;
