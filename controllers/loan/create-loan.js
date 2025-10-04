import LoanModel from "../../models/loan-model.js";

export default async function createLoan(req, res) {
  try {
    const { book, user, dueDate } = req.body;

    const loan = new LoanModel({
      book,
      user,
      dueDate,
    });
    await loan.save();

    res.status(201).json({ success: true, data: loan });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
};
