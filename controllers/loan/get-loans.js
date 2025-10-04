import LoanModel from "../../models/loan-model.js";

export default async function getLoans(req, res) {
  try {
    let { page = 1, limit = 10, status, user, book } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);
    const filters = {};
    if (status) filters.status = status;
    if (user) filters.user = user;
    if (book) filters.book = book;

    const loans = await LoanModel.find(filters)
      .populate("book user", "title fullname") // show book title & user name
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await LoanModel.countDocuments(filters);

    res.status(200).json({
      success: true,
      data: loans,
      page,
      limit,
      total,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};