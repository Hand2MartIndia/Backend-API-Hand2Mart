/* eslint-disable no-use-before-define */
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { JSONValue } from "../types/JSONValue";

export default class ProjectScreenModel extends Model<
  InferAttributes<ProjectScreenModel>,
  InferCreationAttributes<ProjectScreenModel>
> {
  declare _id: CreationOptional<string>;

  declare projectId: string;

  declare screenData: CreationOptional<Record<string, JSONValue>>;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;

  static findByProjectId(projectId: string) {
    return ProjectScreenModel.findAll({
      where: {
        projectId,
      },
    });
  }
}
