import AuthorModel from "../../models/author-model.js";

export default async function removeAuthor(req, res) {
  try {
    const author = await AuthorModel.findByIdAndDelete(req.params?.id);
    if (!author)
      return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, message: "Author deleted" });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
}
