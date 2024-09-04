import morgan from "morgan";
import { envConfig } from "../../../config.js";

export const expressConfig = (express, app) => {
  app.use(express.json());

  app.use(morgan("dev"));
  if (process.env.NODE_ENV !== "test") {
    app.listen(envConfig.PORT, () => {
      console.log(`Listening at PORT ${envConfig.PORT} `);
    });
  }
};
