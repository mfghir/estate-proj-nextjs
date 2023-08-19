import mongoose from "mongoose";
import { Schema, model, modules } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

// const User = modules.User || model("User", userSchema);
const User = mongoose.model("User", userSchema )

export default User;
