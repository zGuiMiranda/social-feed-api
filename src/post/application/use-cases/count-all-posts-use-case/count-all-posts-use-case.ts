import IUseCase from "../../../../shared/interface-use-case";
import { IRepository } from "../../../../shared/interface-repository";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../../../types";

@injectable()
export class CountAllPostsUseCase implements IUseCase {
  private postRepository: IRepository;
  constructor(@inject(TYPES.PostRepository) postRepository: IRepository) {
    this.postRepository = postRepository;
  }
  async run(req: { data }) {
    const { data } = req;
    const response = await this.postRepository.countAll();
    return { data, count: response };
  }
}
