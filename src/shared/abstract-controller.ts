import { container } from "../../inversify.config";
import { TYPES } from "../../types";
import { IErrorHandler } from "./interface-error-handler";
import IUseCase from "./interface-use-case";
import { ValidationError } from "./validation-error";

type responseType = { message?: string; data?: any };

export default abstract class AbstractController {
  readonly errorHandler: IErrorHandler;
  constructor() {
    this.errorHandler = container.get<IErrorHandler>(TYPES.ErrorHandler);
  }

  execute = async (validations: IUseCase[], data: any) => {
    let response: responseType = {
      data,
    };

    for (let useCase of validations) {
      response = await useCase.run(response);

      if (response.message) {
        throw new ValidationError(response.message);
      }
    }
    return response;
  };

  isItNumber(value: number): boolean {
    return !isNaN(value);
  }

  buildPagination(filterOptions: { limit: unknown; page: unknown }): {
    offset: number;
    limit: number;
  } | null {
    const { limit, page } = filterOptions;

    if (!limit || !page) return null;

    if (!(typeof limit === "string") || !(typeof page === "string"))
      return null;

    if (!this.isItNumber(+limit) || !this.isItNumber(+page)) return null;

    const offset =
      ((page as unknown as number) - 1) * (limit as unknown as number);

    return { offset, limit: +limit };
  }
}
