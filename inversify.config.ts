import { Container } from "inversify";
import { PostRepository } from "./src/post/infra/repositories/post-repository";
import { IRepository } from "./src/shared/interface-repository";
import { TYPES } from "./types";
import ErrorHandler from "./src/shared/error-handler";
import { IErrorHandler } from "./src/shared/interface-error-handler";

const container = new Container();
container.bind<IRepository>(TYPES.PostRepository).to(PostRepository);
container.bind<IErrorHandler>(TYPES.ErrorHandler).to(ErrorHandler);

export { container };
