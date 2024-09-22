import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://NIMESH939:1204811885@cluster0.n6cm3.mongodb.net/blog-app"
  );
  console.log("DataBase Connected.");
};
