"use strict";
import { body } from "express-validator";
import bcrypt from "bcrypt";

export const validateUser = [
  body("full_name")
    .isLength({ min: 3 })
    .withMessage("Full name must be at least 6 characters long")
    .trim()
    .escape(),

  body("user_name")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 4 characters long")
    .trim()
    .escape(),

  body("email").isEmail().withMessage("Enter a valid email").normalizeEmail(),

  body("phone_number")
    .isNumeric()
    .withMessage("Phone number must be numeric")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone number must be 10 digits"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .trim()
    .escape(),

  // Confirm password matches
  body("cnf_password").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password");
    }
    return true;
  }),

  body("login_status")
    .isBoolean()
    .withMessage("Login status must be a boolean value"),
];

export const bcryptPwd = async (password) => {
  try {

    const bcryptedPwd = await bcrypt.hash(password, 10);
    return bcryptedPwd;

  } catch (error) {

    console.error("Error", error);
    
  }
};
