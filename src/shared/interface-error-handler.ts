import { Response } from "express";

export interface IErrorHandler {
  handle(exception: unknown, response: Response): void;
}
