import { DataTypes, Sequelize } from "sequelize";
import ProjectScreenModel from "../ProjectScreenModel";

export default (sequelize: Sequelize) =>
  ProjectScreenModel.init(
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
      screenData: {
        type: DataTypes.JSONB,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, tableName: "project_screen", underscored: true }
  );
