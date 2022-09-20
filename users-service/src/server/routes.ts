import { Express, NextFunction, Request } from "express";
import { getRepository } from "typeorm";
import { AppDataSource } from "../db/connection";
import User from "../models/User";

export const setRoutes = (app: Express) => {
  const userRepository = AppDataSource.getRepository(User);
  app.get("/users/:id", async (req: Request, res, next) => {
    try {
      const user = await userRepository.findOne({
        where: { id: req.params.id },
      });

      if (!user) {
        return next(new Error("Invalid user ID!"));
      }
      return res.json(user);
    } catch (err) {
      return next(err);
    }
  });
};
