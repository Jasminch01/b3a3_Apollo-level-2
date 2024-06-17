import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { Tuser } from "./user.interface";
import config from "../../config";

const userSchema = new mongoose.Schema<Tuser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      trim: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: 0,
    },
    phone: {
      type: String,
      required: true,
      match: [/^\d{10}$/, "Please fill a valid 10-digit phone number"],
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    //default : createdAt updatedAt
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save into DB

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );

  next();
});

// set '' after saving password
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});
export const User = mongoose.model("User", userSchema);
