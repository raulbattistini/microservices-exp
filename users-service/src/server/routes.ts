import { Express, NextFunction, Request } from "express";
import { getRepository } from "typeorm";
import { AppDataSource } from "../db/data-source";
import User from "../models/User";

export const setRoutes = (app: Express) => {
  const userRepository = AppDataSource.getRepository(User);

  app.post("/sessions", async (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      return next(new Error("Invalid body!"));
    }
    try {
      const user = await userRepository.findBy({
        username: req.body.username,
        select: ["id", "passwordHash"]
        
      }
      );
    } catch (err) {
      return next(err);
    }
  });

  app.get("/users/:id", async (req: Request, res, next) => {
    try {
      const user = await userRepository.findOne({
        where: { id: req.params.id },
      });

      if (req.params.id === null) {
        return res.status(404).json({ message: "Sorry can't find that!" });
      }
      return res.json(user);
    } catch (err) {
      return next(err);
    }
  });
};
