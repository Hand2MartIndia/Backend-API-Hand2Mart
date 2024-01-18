import { DataTypes, Sequelize } from "sequelize";
import ProjectTagsModel from "../ProjectTagsModel";

export default (sequelize: Sequelize) =>
  ProjectTagsModel.init(
    {
      _id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      projectId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tagData: {
        type: DataTypes.JSONB,
      },
      tagName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      figmaNodeId: {
        type: DataTypes.STRING,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, tableName: "project_tags", underscored: true }
  );
