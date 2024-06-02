import mongoose from "mongoose";

// mongodb+srv://nehat786:<password>@cluster0.2yzdsru.mongodb.net/

const MONGO_URI =
  "mongodb+srv://nehat786:barbi78692@cluster0.2yzdsru.mongodb.net/";

export async function connect() {
  try {
    mongoose.connect(MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something goes wrong!");
    console.log(error);
  }
}
