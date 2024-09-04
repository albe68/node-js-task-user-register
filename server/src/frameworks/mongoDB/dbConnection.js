"use strict";

import mongoose from "mongoose";
import { envConfig } from "../../../config.js";

export const dbConnection = () => {
  mongoose
    .connect(`${envConfig.MONGODB_URI}`)

    .then(() => {
      const dbName = mongoose.connection.name;
      console.log(`MongoDB Connected successfully to database: ${dbName}`);
    })

    .catch((error) => {
      console.log(error.stack);
    });
};
