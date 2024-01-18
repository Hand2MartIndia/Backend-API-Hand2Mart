import { DataTypes, Sequelize } from "sequelize";
import UserModel from "../UserModel";

export default (sequelize: Sequelize) =>
  UserModel.init(
    {
      _id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      metaData: {
        type: DataTypes.JSONB,
      },
      profilePic: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING(32),
        unique: true,
        allowNull: true,
        validate: {
          max: 32,
        },
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      figmaAccessToken: {
        type: DataTypes.STRING,
      },
      figmaRefreshToken: {
        type: DataTypes.STRING,
      },
      expiresAt: {
        type: DataTypes.NUMBER,
      },
      createdAt: DataTypes.DATE,

      updatedAt: DataTypes.DATE,
    },
    { sequelize, tableName: "user", underscored: true }
  );
