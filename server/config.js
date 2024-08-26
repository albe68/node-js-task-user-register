import dotenv from "dotenv";

dotenv.config({});

export const envConfig = {
  PORT: process.env.PORT || 8888,

  MONGODB_URI: process.env.MONGODB_CONNECTION_URI || "mongodb://0.0.0.0:27017/register_app",

  ENVIRONMENT: process.env.ENV || "development",
};
