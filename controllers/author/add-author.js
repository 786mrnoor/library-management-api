import AuthorModel from "../../models/author-model.js";

export default async function addAuthor(req, res) {
  try {
    const author = await AuthorModel.create(req.body);
    res.status(201).json({ success: true, data: author });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
}
