import { Express, NextFunction, Request } from "express";
import dayjs from "dayjs";
import omit from 'lodash.omit';
import { UserSession } from "./../entity/UserSession";
import { generateUUID } from "./../helpers/generateUUID";
import { AppDataSource } from "../db/data-source";
import { User } from "../models/User";
import { passwordCompareSync } from "../helpers/passwordCompareSync";
import { hashPassword } from "./../helpers/passwordHash";

export const setRoutes = (app: Express) => {
  AppDataSource.initialize();
  const userRepository = AppDataSource.getRepository(User);
  const userSessionRepository = AppDataSource.getRepository(UserSession);

  app.post("/sessions", async (req, res, next) => {
    if (!req.body.username || !req.body.password) {
      return next(new Error("Invalid body!"));
    }

    try {
      const user = await userRepository.findOne({
        where: { username: req.body.username },
        select: ["id", "passwordHash"],
      });

      if (!user) return next(new Error("Invalid username!"));

      if (!passwordCompareSync(req.body.password, user.passwordHash)) {
        return next(new Error("Invalid password!"));
      }

      const expiresAt = dayjs().add(1, "hour").toISOString();

      const sessionToken = generateUUID();

      const userSession = {
        expiresAt,
        id: sessionToken,
        userId: user.id,
      };

      await AppDataSource.createQueryBuilder()
        .insert()
        .into(UserSession)
        .values([userSession])
        .execute();

      return res.json(userSession);
    } catch (err) {
      return next(err);
    }
  });

  app.post('/users', async (req, res, next)=>{
    if (!req.body.username || !req.body.password){
      return next(new Error("Invalid body!"))
    }

    try {
      
      const newUser = {
        id: generateUUID(),
        passwordHash: hashPassword(req.body.password),
        username: req.body.username
      }

      await AppDataSource.createQueryBuilder().insert().into(User).values([newUser]).execute();

      return res.json(omit(newUser, ["passwordHash"]));

    } catch (err) {

      return next(err)

    }
  })

  app.delete("/sessions/:sessionId", async (req, res, next) => {

    try {
      const userSession = await userSessionRepository.findOne({
        where: { id: req.params.sessionId },
      });

      if (!userSession) return next(new Error("Invalid session ID!"));

      await userSessionRepository.remove(userSession);

      return res.end();

    } catch (err) {
      
      return next(err);
    
    }
  });

  app.get("/sessions/:sessionId", async (req, res, next) => {

    try {
      const userSession = await userSessionRepository.findOne({
        where: { id: req.params.sessionId },
      });

      if (!userSession) return next(new Error("Invalid session ID!"));


      return res.json(userSession);

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
