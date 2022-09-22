import { UserSession } from "./../entity/UserSession";
import { generateUUID } from "./../helpers/generateUUID";
import { Express, NextFunction, Request } from "express";
import { DataSource, getRepository } from "typeorm";
import dayjs from "dayjs";
import { AppDataSource } from "../db/data-source";
import User from "../models/User";
import { passwordCompareSync } from "../helpers/passwordCompareSync";

export const setRoutes = (app: Express) => {
  AppDataSource.initialize();
  const entitymetadata = AppDataSource['entityMetadatas']
  const userRepository = AppDataSource.getRepository(User);
  console.log('Entity Metadata contém:  -->', entitymetadata) // retorna [], ou seja, o problema se encontra na Data Source que nao possui o 'Entity Metadata' para 'User', embora seja definido no arquivo.
  const connection = new DataSource({
    type: "mysql",
  });

  // const manager = userRepository.manager;
  // console.log(manager.connection)
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

      const expiresAt = dayjs()
        .add(
          process.env.USERS_SESSION_EXPIRY_HOURS as unknown as number,
          "hour"
        )
        .toISOString();

      const sessionToken = generateUUID();

      const userSession = {
        expiresAt,
        id: sessionToken,
        userId: user.id,
      };

      await connection
        .createQueryBuilder()
        .insert()
        .into(UserSession)
        .values([userSession])
        .execute();

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
