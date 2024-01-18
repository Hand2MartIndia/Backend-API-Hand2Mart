import { DataTypes, Sequelize } from "sequelize";
import ProjectModel from "../ProjectModel";

export default (sequelize: Sequelize) =>
  ProjectModel.init(
    {
      _id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      techStack: {
        type: DataTypes.JSONB,
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      framework: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      logo: {
        type: DataTypes.STRING,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, tableName: "project", underscored: true }
  );
