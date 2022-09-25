import { UserSession } from "../adapters/UsersService";
import { Request, Response } from "express";

export interface IResolverContext {
  req: Request;
  res: Response;
}

export interface UserSessionType extends UserSession {}
