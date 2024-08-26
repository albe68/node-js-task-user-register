"use strict";

import { authController } from "./controller.js";
import { validateUser } from "../utils/utils.js";

export const router = async (app) => {
  app.post("/api/v1/register-user", validateUser, authController);
};
