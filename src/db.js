import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/merndb");

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/merndb");
    console.log(">>> DB is connected");
  } catch (error) {
    console.error(error);
  }
};
