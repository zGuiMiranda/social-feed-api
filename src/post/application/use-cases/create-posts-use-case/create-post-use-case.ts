import IUseCase from "../../../../shared/interface-use-case";
import { IRepository } from "../../../../shared/interface-repository";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../../../types";
import Post from "../../../domain/post";

@injectable()
export class CreatePostUseCase implements IUseCase {
  private postRepository: IRepository;
  constructor(@inject(TYPES.PostRepository) postRepository: IRepository) {
    this.postRepository = postRepository;
  }
  async run(req: { data: Post }) {
    const response = await this.postRepository.create(req?.data);
    return { ...response?.dataValues, ...req.data };
  }
}
