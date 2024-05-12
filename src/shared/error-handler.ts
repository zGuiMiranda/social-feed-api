import { Response } from "express";
import { ValidationError } from "./validation-error";
import { IErrorHandler } from "./interface-error-handler";
import { injectable } from "inversify";

@injectable()
export default class ErrorHandler implements IErrorHandler {
  handle(exception: unknown, response: Response) {
    if (exception instanceof ValidationError) {
      response.status(exception.status).send(exception.validationErrorFeedback);
    } else if (exception instanceof Error) {
      response.status(500).send(exception.message);
    }
  }
}
