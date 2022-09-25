import { UsersService } from "../adapters/UsersService";
import { Request, Response, NextFunction } from "express";

export const injectSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.cookies.userSessionId) {
    const userSession = await UsersService.fetchUserSession({
      sessionId: req.cookies.userSessionId,
    });
    console.log('userSession injected is: ---->', userSession);
    res.locals.userSession = userSession;

  } else return next();
};
