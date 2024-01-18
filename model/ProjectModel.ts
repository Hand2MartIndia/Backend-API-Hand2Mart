/* eslint-disable no-use-before-define */
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { JSONValue } from "../types/JSONValue";

export default class ProjectModel extends Model<
  InferAttributes<ProjectModel>,
  InferCreationAttributes<ProjectModel>
> {
  declare _id: CreationOptional<string>;

  declare name: string;

  declare techStack: CreationOptional<Record<string, JSONValue>>;

  declare framework: string;

  declare language: string;

  declare logo: CreationOptional<string>;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;

  expose() {
    return {
      id: this._id,
      name: this.name,
      tech_stack: this.techStack,
      framework: this.framework,
      language: this.language,
    };
  }

  static findByIds(ids: string[]) {
    return ProjectModel.findAll({
      where: {
        _id: ids,
      },
    });
  }

  static findByIdsAndName(ids: string[], name: string) {
    return ProjectModel.findAll({
      where: {
        _id: ids,
        name,
      },
    });
  }

  static destroyProject(id: string) {
    ProjectModel.destroy({ where: { _id: id } });
  }
}
