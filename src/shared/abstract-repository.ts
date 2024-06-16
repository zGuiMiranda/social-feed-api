import { unmanaged } from "inversify";
import { injectable } from "inversify/lib/annotation/injectable";
import { Model, ModelStatic } from "sequelize";

@injectable()
export abstract class AbstractRepository {
  readonly model: ModelStatic<Model>;
  constructor(@unmanaged() model: ModelStatic<Model>) {
    this.model = model;
  }
  save = async (data: any) => {
    return this.model.create(data);
  };
  findAllWithFilters = async (options) => {
    return this.model.findAll({
      ...options,
      order: [["createdAt", "DESC"]],
    });
  };

  countAllRows = async (options) => {
    return this.model.count(options);
  };
}
