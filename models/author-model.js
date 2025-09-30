import { model, Schema } from "mongoose";

const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    bio: { type: String, trim: true },
    dateOfBirth: { type: Date },
  },
  { timestamps: true }
);

const AuthorModel = model("Author", authorSchema);

export default AuthorModel;
