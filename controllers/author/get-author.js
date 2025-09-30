import AuthorModel from "../../models/author-model.js";

export default async function getAuthor(req, res) {
  try {
    const author = await AuthorModel.findById(req.params?.id).lean().exec();
    if (!author)
      return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, data: author });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
}
