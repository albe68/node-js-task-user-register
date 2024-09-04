// "use strict";

import {
  authCtrl,
  deleteUserCtrl,
  getAllUsersCtrl,
  getUserCtrl,
  updateUserCtrl,
} from "./controller.js";
import { validateUser } from "../utils/utils.js";

export const router = async (app) => {
  //validateUser

  app.post("/api/v1/register-user", authCtrl);

  app.get("/api/v1/get-user-by-id/:user_id", getUserCtrl);

  app.get("/api/v1/get-all-users", getAllUsersCtrl);

  app.delete("/api/v1/delete-user/:user_id", deleteUserCtrl);

  app.put("/api/v1/update-user/:user_id", updateUserCtrl);

  

};
