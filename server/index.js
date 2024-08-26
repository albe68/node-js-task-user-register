"use strict";

import express from "express";
import { dbConnection } from "./frameworks/mongoDB/dbConnection.js";
import { router } from "./frameworks/express/routes.js";
import { expressConfig } from "./frameworks/express/express-config.js";

const app = express();

dbConnection();

/**
 * @param {Object} express - Dependancy Injection of express object.
 * @param {Object} app - Dependancy Injection of app Instance.
 */

expressConfig(express, app);

/**
 * @param {Object} app - Dependancy Injection of app Instance
 */

router(app);
