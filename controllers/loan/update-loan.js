import LoanModel from "../../models/loan-model.js";

export default async function updateLoan(req, res) {
  try {
    let { dueDate, returnedDate, status } = req.body;

    let updatePayload = {}
    if (dueDate) updatePayload.dueDate = dueDate;
    if (returnedDate) updatePayload.returnedDate = returnedDate;
    if (status) updatePayload.status = status;

    const loan = await LoanModel.findByIdAndUpdate(req.params.id, updatePayload, {
      new: true,
      lean: true,
      runValidators: true
    });
    if (!loan) return res.status(404).json({ error: true, message: "Loan not found" });
    res.status(200).json({ success: true, data: loan });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
};
