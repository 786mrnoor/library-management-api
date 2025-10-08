import LoanModel from "../../models/loan-model.js";

export default async function removeLoan(req, res) {
  try {
    const loan = await LoanModel.findByIdAndDelete(req.params?.id);
    if (!loan)
      return res.status(404).json({ success: false, message: "Not found" });
    res.status(200).json({ success: true, message: "Loan deleted" });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
};
