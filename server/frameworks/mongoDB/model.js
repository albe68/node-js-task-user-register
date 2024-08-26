import { model, Schema, Types } from "mongoose";

const userSchema = new Schema(
  { 
    full_name: { type: String },
    user_name: { type: String },
    email: { type: String },
    phone_number: { type: Number },
    password: { type: String },
    login_status: { type: Boolean, default:false },
  },
  { timestamps: true }
);

export const userModel = model("userModel", userSchema, "User Collection");
