/* eslint-disable no-use-before-define */
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { JSONValue } from "../types/JSONValue";

export default class UserModel extends Model<
  InferAttributes<UserModel>,
  InferCreationAttributes<UserModel>
> {
  declare _id: CreationOptional<string>;

  declare email: string;

  declare password: CreationOptional<string>;

  declare metaData: CreationOptional<Record<string, JSONValue>>;

  declare username: CreationOptional<string>;

  declare firstName: CreationOptional<string>;

  declare lastName: CreationOptional<string>;

  declare profilePic: CreationOptional<string>;

  declare figmaAccessToken: CreationOptional<string>;

  declare figmaRefreshToken: CreationOptional<string>;

  declare expiresAt: CreationOptional<number>;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;

  expose() {
    return {
      email: this.email,
      username: this.username,
      first_name: this.firstName,
      last_name: this.lastName,
    };
  }

  static findOrSignUp(userEmail: string, userPassword: string) {
    return UserModel.findOrCreate({
      where: { email: userEmail },
      defaults: {
        email: userEmail,
        password: userPassword,
      },
    });
  }

  static findByEmail(userEmail: string) {
    return UserModel.findOne({
      where: { email: userEmail },
    });
  }

  static findByUserName(username: string) {
    return UserModel.findOne({
      where: { username },
    });
  }

  static findByIds(userIds: string[]) {
    return UserModel.findAll({ where: { _id: userIds } });
  }

  static async assignFigmaToken(
    email: string,
    figmaAccessToken: string,
    figmaRefreshToken: string,
    expiresAt: number
  ) {
    // eslint-disable-next-line no-unused-vars
    const [user] = await UserModel.findOrCreate({
      where: { email },
    });

    user.figmaAccessToken = figmaAccessToken;
    user.figmaRefreshToken = figmaRefreshToken;
    user.expiresAt = expiresAt;

    return user.save();
  }
}
