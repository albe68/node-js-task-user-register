import { model, Schema, Types } from "mongoose";

const userSchema = new Schema(
  {
    id: { type: Number },
    full_name: { type: String },
    user_name: { type: String },
    email: { type: String },
    phone_number: { type: Number },
    password: { type: String },
    login_status: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const autoGenerateSchema = new Schema(
  {
    id: { type: String },
    sequence: { type: Number },
  },
  { timestamps: true }
);

export const userModel = model("userModel", userSchema, "User Collection");
export const autoGenModel = model("autoGenModel",autoGenerateSchema,"Auto Gen Collection");
