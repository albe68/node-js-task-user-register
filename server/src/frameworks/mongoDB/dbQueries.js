import { userModel } from "./model.js";

export const createUser = async (body) => {
  try {
    await userModel.create(body);
    console.log("success: query ");
  } catch (error) {
    console.log("failed: query", error.message);
  }
};

export const getUserByEmail = async (email) => {
  try {
    const user = await userModel.findOne({ email: email });
    return user;
  } catch (error) {
    console.log("failed: query ", error.message);
  }
};

export const getUserByID = async (user_id) => {
  try {
    const user = await userModel.findOne({ user_id: user_id });
    return user;
  } catch (error) {
    console.log("failed: query ", error.message);
  }
};

export const getAllUsers = async () => {
  try {
    const users = await userModel.find();

    return users;
  } catch (error) {
    console.log("failed: query ", error.message);
  }
};

export const deleteUserByID = async (user_id, updated_user) => {
  try {
    //if user of this id is not db emit an error
    const deletedUser = await userModel.deleteOne({ user_id: user_id });
    //here the deletedUser variable is acknowldeged from db query so wont do null;
    if (!deletedUser) {
      throw new Error("There is no user with id");
    }
    return deletedUser;
  } catch (error) {
    console.log("failed: query ", error.message);
  }
};
//if _id is set false in schema what will happen if findAndUpdateByID functions cause they need _id s
export const updateUserByID = async (user_id, updated_user) => {
  const updateData = {
    $set: updated_user,
  };
 
  const updatedUser = await userModel.updateOne(
    { user_id: user_id },
    updateData, {runValidators:true}
  );

  return updatedUser;
};
