import { Model } from "sequelize";

export interface IRepository {
  create(data: any): any;
  findAll(filters: any): Promise<Model<any, any>[]>;
  countAll(filters?: any[]): Promise<number>;
}
