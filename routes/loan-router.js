import { Router } from "express";
import createLoan from "../controllers/loan/create-loan.js";
import getLoans from "../controllers/loan/get-loans.js";
import removeLoan from "../controllers/loan/remove-loan.js";
import updateLoan from "../controllers/loan/update-loan.js";
import authMiddleware from "../middleware/auth-middleware.js";

const loanRouter = Router();

loanRouter
  .get('/', getLoans)
  .post('/', authMiddleware, createLoan)
  .patch('/:id', authMiddleware, updateLoan)
  .delete('/:id', authMiddleware, removeLoan);

export default loanRouter;