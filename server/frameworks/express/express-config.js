
import cors from "cors";
import morgan from "morgan";
import { envConfig } from "../../config.js";



  
export const expressConfig = (express, app) => {
  
  app.use(cors());

  app.use(express.json());

  app.use(morgan("dev"));

  app.listen(envConfig.PORT, () => {
    console.log(`Listening at PORT ${envConfig.PORT} `);
  });

};
