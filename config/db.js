import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI,
      {
        dbName: process.env.DB_NAME,
        autoIndex: process.env.DB_NAME ? true : false
      });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB connection error:", err.message);
    process.exit(1);
  }
}
