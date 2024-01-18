import { DataTypes, Sequelize } from "sequelize";
import ProjectMembership from "../../enums/ProjectMembership";
import UserProjectModel from "../UserProjectModel";
import values from "../../utils/EnumValueArray";

export default (sequelize: Sequelize) =>
  UserProjectModel.init(
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
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        values: values(ProjectMembership),
        allowNull: false,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { sequelize, tableName: "user_project", underscored: true }
  );
