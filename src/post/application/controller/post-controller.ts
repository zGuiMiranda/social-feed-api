import { Request, Response } from "express";
import AbstractController from "../../../shared/abstract-controller";
import { ValidateFieldsCreatePostUseCase } from "../use-cases/shared/validate-post-content-field";
import { CreatePostUseCase } from "../use-cases/create-posts-use-case/create-post-use-case";
import { container } from "../../../../inversify.config";
import { IRepository } from "../../../shared/interface-repository";
import { TYPES } from "../../../../types";
import { GetAllPostsUseCase } from "../use-cases/get-all-posts-use-case/get-all-posts-use-case";
import { CountAllPostsUseCase } from "../use-cases/count-all-posts-use-case/count-all-posts-use-case";
import { EmitNewPostUseCase } from "../use-cases/emit-new-post-use-case/emit-new-post-use-case";
import io from "../../../../socket.io";

export default class PostController extends AbstractController {
  readonly insertPostFlow;
  readonly getAllPostsFlow;
  constructor() {
    super();
    this.insertPostFlow = [
      new ValidateFieldsCreatePostUseCase(),
      new CreatePostUseCase(container.get<IRepository>(TYPES.PostRepository)),
      new EmitNewPostUseCase(io),
    ];
    this.getAllPostsFlow = [
      new GetAllPostsUseCase(container.get<IRepository>(TYPES.PostRepository)),
      new CountAllPostsUseCase(
        container.get<IRepository>(TYPES.PostRepository)
      ),
    ];
  }

  createPost = async (req: Request, res: Response) => {
    try {
      res.send(await this.execute(this.insertPostFlow, req.body));
    } catch (exception: any) {
      this.errorHandler.handle(exception, res);
    }
  };
  findAllPosts = async (req: Request, res: Response) => {
    try {
      const { page, limit } = req.query;
      const paginationOptions = this.buildPagination({ page, limit });
      res.send(await this.execute(this.getAllPostsFlow, paginationOptions));
    } catch (exception: any) {
      this.errorHandler.handle(exception, res);
    }
  };
}
