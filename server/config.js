import dotenv from "dotenv";

dotenv.config({});
console.log(process.env.NODE_ENV);
export const envConfig = {
  PORT: process.env.PORT || 8888,

  MONGODB_URI: process.env.MONGODB_CONNECTION_URI || "mongodb://0.0.0.0:27017/register_app",

  ENVIRONMENT: process.env.ENV || "development",

  
};
