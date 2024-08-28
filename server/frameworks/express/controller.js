import {
  createUser,
  deleteUserByID,
  getAllUsers,
  getUserByEmail,
  getUserByID,
  updateUserByID,
} from "../mongoDB/dbQueries.js";
import { validationResult } from "express-validator";
import { bcryptPwd } from "../utils/utils.js";
import { autoGenModel } from "../mongoDB/model.js";

export const authCtrl = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const body = req.body;
    const { email, password } = req.body;

    //compare cnf password validation done in express-validator

    const user = await getUserByEmail(email);
    console.log("updated Doc")

    if (user) {
      throw new Error("User already exsists");
    }

    const bcryptedPwd = await bcryptPwd(password);
    body.password = bcryptedPwd;

    let seqId;
    let userCustomId = await autoGenModel.findOneAndUpdate(
      { id: "autoval" },
      { $inc: { sequence: 1 } },
      { new: true }
    );
    //returns null in intial scenerio
    if (!userCustomId) {
      userCustomId = await new autoGenModel({
        id: "autoval",
        sequence: 1,
      }).save();
      seqId = 1;
    } else {
      seqId = userCustomId.sequence;
    }
    body.user_id = seqId;
    console.log(body,"updated Doc")
    await createUser(body);

    return res.status(200).json({
      status: "success",
      message: "User created",
      error: false,
    });
  } catch (error) {
    return res.status(401).json({
      error: true,
      status: "error",
      message: error.message,
    });
  }
};

export const getUserCtrl = async (req, res) => {
  try {
    const userId = req.params.user_id;
    //exclude password to client
    const user = await getUserByID(userId);
    const { password, ...userObj } = user._doc;
    return res.status(200).json({
      status: "success",
      data: userObj,
    });
  } catch (error) {
    return res.status(401).json({
      error: true,
      status: "error",
      message: error.message,
    });
  }
};

export const getAllUsersCtrl = async (req, res) => {
  try {
    const users = await getAllUsers();

    if (!users) {
      throw new Error("No users found ! Please insert users data");
    }
    const { password, ...allUsers } = users;
    return res.status(200).json({
      status: "success",
      data: allUsers,
      error: false,
    });
  } catch (error) {
    return res.status(401).json({
      error: true,
      status: "error",
      message: error.message,
    });
  }
};

export const deleteUserCtrl = async (req, res) => {
  try {
    const { user_id } = req.params;
    const deletedUser = await deleteUserByID(user_id);
    res.status(200).json({
      status: "success",
      message: "user deleted",
      err: false,
    });
  } catch (error) {
    res.status(401).json({
      err: true,
      status: "error",
      error: error.message,
    });
  }
};

export const updateUserCtrl = async (req, res) => {
  try {
    const { user_id } = req.params;
    const updated_user = req.body;
    await updateUserByID(user_id, updated_user);
    res.status(200).json({
      status: "sucess",
      error: false,
    });
  } catch (error) {
    res.status(401).json({
      error: true,
      status: "failed",
      err: error.message,
    });
  }
};
