import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import accessEnv from "../helpers/helper";
import { setRoutes } from "./routes";


const PORT = parseInt(accessEnv("PORT", "3333"), 10);

export const startServer = () => {
  const app = express();

  app.use(express.json());

  app.use(
    cors({
      origin: (origin, cb) => cb(null, true),
      credentials: true,
    })
  );

  setRoutes(app);


  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({ message: err.message });
  });
  
  app.listen(PORT, ()=>{
   console.log(`Server is listening on port: ${PORT}`)
  })
};
