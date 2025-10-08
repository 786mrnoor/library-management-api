import AuthorModel from "../../models/author-model.js";

export default async function updateAuthor(req, res) {
  try {
    const author = await AuthorModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        lean: true,
        runValidators: true,
      }
    );
    if (!author)
      return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, data: author });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
}
