import { injectable } from "inversify";
import { IRepository } from "../../../shared/interface-repository";
import { AbstractRepository } from "../../../shared/abstract-repository";
import PostDomain from "../../domain/post";
import Post from "../../../models/post.model";

@injectable()
export class PostRepository extends AbstractRepository implements IRepository {
  constructor() {
    super(Post);
  }
  create = async (data: PostDomain) => {
    return this.save(data);
  };
  findAll = async (filters: any[]) => {
    return this.findAllWithFilters(filters);
  };
  async countAll(filters: any[]): Promise<number> {
    const response = await this.countAllRows(filters);
    return +response;
  }
}
