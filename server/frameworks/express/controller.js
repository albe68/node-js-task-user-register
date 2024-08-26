import { createUser, getUser } from "../mongoDB/dbQueries.js";
import { body, validationResult } from "express-validator";
import { bcryptPwd } from "../utils/utils.js";

export const authController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const body = req.body;
    const { email, password } = req.body;
    //compare cnf password validation done in express-validator

    const user = await getUser(email);

    if (user) {
      throw new Error("User already exsists");
    };

    const bcryptedPwd=await bcryptPwd(password); 
    body.password=bcryptedPwd;

    await createUser(body);

    res.status(200).json({
      status: "success",
      message: "User created",
      error: false,
    });
  } catch (error) {
    res.status(401).json({
      error: true,
      status: "error",
      message: error.message,
    });
  }
};
