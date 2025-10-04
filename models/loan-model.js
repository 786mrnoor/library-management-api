import mongoose, { Schema } from "mongoose";

const loanSchema = new Schema(
  {
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    loanDate: {
      type: Date,
      default: Date.now,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    returnedDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["borrowed", "returned", "overdue"],
      default: "borrowed",
    },
  },
  { timestamps: true }
);
const LoanModel = mongoose.model("Loan", loanSchema);

export default LoanModel;
