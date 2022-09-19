import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import accessEnv from "#root/helpers/helper";

const PORT = parseInt(accessEnv("PORT", "3333"), 10);

export const startServer = () => {
  const app = express();

  app.use(bodyParser.json());

  app.use(
    cors({
      origin: (origin, cb) => cb(null, true),
      credentials: true,
    })
  );

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({ message: err.message });
    console.log('wwwww')
  });

  app.listen(3333, ()=>{
   console.log(`Server is listening on port: 3333`)
  })
};
