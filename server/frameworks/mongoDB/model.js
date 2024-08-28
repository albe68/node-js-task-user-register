import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    user_id: { type: Number },
    full_name: { type: String },
    user_name: { type: String },
    email: { type: String },
    phone_number: { type: Number },
    password: { type: String },
    login_status: { type: Boolean, default: false },
  },
  { timestamps: true }
);
//if _id is set false in schema what will happen if findAndUpdateByID functions cause they need _id s

const autoGenerateSchema = new Schema(
  {
    id: { type: String },
    sequence: { type: Number },
  },
  { timestamps: true }
);

export const userModel = model("userModel", userSchema, "User Collection");
export const autoGenModel = model(
  "autoGenModel",
  autoGenerateSchema,
  "Auto Gen Collection"
);
