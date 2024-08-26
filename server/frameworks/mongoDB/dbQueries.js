import { userModel } from "./model.js";

export const createUser = async (body) => {
  try {
    await userModel.create(body);
    console.log("success: query ");
  } catch (error) {
    console.log("failed: query ", error.message);
  }
};

export const getUser = async (email) => {
  try {
    const user = await userModel.findOne({ email: email });
    return user;
  } catch (error) {
    console.log("failed: query ", error.message);
  }
};
