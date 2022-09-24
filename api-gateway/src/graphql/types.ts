import { Request, Response } from "express";

export interface IResolverContext {
  req: Request;
  res: Response;
}
