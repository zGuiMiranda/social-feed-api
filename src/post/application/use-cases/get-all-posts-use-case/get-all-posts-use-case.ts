import IUseCase from "../../../../shared/interface-use-case";
import { IRepository } from "../../../../shared/interface-repository";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../../../types";

@injectable()
export class GetAllPostsUseCase implements IUseCase {
  private postRepository: IRepository;
  constructor(@inject(TYPES.PostRepository) postRepository: IRepository) {
    this.postRepository = postRepository;
  }
  async run(req: { data }) {
    const response = await this.postRepository.findAll(req.data);
    return { data: response };
  }
}
