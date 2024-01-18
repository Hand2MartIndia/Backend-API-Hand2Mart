/* eslint-disable no-use-before-define */
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { JSONValue } from "../types/JSONValue";

export default class ProjectTagsModel extends Model<
  InferAttributes<ProjectTagsModel>,
  InferCreationAttributes<ProjectTagsModel>
> {
  declare _id: CreationOptional<string>;

  declare projectId: string;

  declare tagData: CreationOptional<Record<string, JSONValue>>;

  declare tagName: string;

  declare figmaNodeId: CreationOptional<string>;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;

  expose() {
    return {
      project_id: this.projectId,
      tag_name: this.tagName,
      figma_node_id: this.figmaNodeId,
      tag_data: this.tagData,
    };
  }

  exposeData() {
    return {
      tag_name: this.tagName,
      figma_node_id: this.figmaNodeId,
      tag_data: this.tagData,
    };
  }

  exposeName() {
    return {
      project_id: this.projectId,
      tag_name: this.tagName,
      figma_node_id: this.figmaNodeId,
    };
  }

  static async createOrUpdateTagName(
    projectId: string,
    tagName: string,
    figmaNodeId: string
  ) {
    const [projectTag, isCreated] = await ProjectTagsModel.findOrCreate({
      where: { projectId, figmaNodeId },
      defaults: { projectId, figmaNodeId, tagName },
    });

    if (!isCreated) {
      return ProjectTagsModel.update(
        {
          tagName,
        },
        { where: { projectId, figmaNodeId } }
      );
    }

    return projectTag;
  }

  static async updateTagData(
    projectId: string,
    figmaNodeId: string,
    tagData: Record<string, JSONValue>
  ) {
    return ProjectTagsModel.update(
      { tagData },
      { where: { projectId, figmaNodeId } }
    );
  }

  static findByProjectId(projectId: string) {
    return ProjectTagsModel.findAll({
      where: { projectId },
    });
  }

  static async findByProjectAndFigmaIds(
    projectId: string,
    figmaNodeId: string
  ) {
    return ProjectTagsModel.findOne({
      where: { projectId, figmaNodeId },
    });
  }
}
