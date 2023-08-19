// import mongoose from "mongoose";

// async function connectDB() {
//   if (mongoose.connections[0].readyState) return;
//   mongoose.set("strictQuery", false);
//   await mongoose.connect(process.env.MONGO_URI);
//   console.log("Connected to DB");
// }

// export default connectDB;


const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connecetToDb = async () => {
  try {
    const connect = await mongoose.connect(
   `MONGO_URI=mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.8tst5at.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log(`db is connect at ${connect.connection.host}`);
  } catch (err) {
    console.log(err, "data base cant connect");
    process.exit(1);
  }
};

module.exports = connecetToDb;
