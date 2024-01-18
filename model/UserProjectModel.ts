/* eslint-disable no-use-before-define */
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import ProjectMembership from "../enums/ProjectMembership";

export default class UserProjectModel extends Model<
  InferAttributes<UserProjectModel>,
  InferCreationAttributes<UserProjectModel>
> {
  declare _id: CreationOptional<string>;

  declare projectId: string;

  declare userId: string;

  declare role: ProjectMembership;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;

  static destroyMember(projectId: string, userId: string) {
    return UserProjectModel.destroy({
      where: {
        projectId,
        userId,
        role: ProjectMembership.MEMBER,
      },
    });
  }

  static findAllMember(projectId: string) {
    return UserProjectModel.findAll({
      where: {
        projectId,
      },
    });
  }

  static findUserByProjectIdOwner(projectId: string) {
    return UserProjectModel.findOne({
      where: {
        projectId,
        role: ProjectMembership.OWNER,
      },
    });
  }

  static findByProjectIdAndUserId(projectId: string, userId: string) {
    return UserProjectModel.findAll({
      where: {
        projectId,
        userId,
      },
    });
  }

  static findMemberByProjectIdAndUserIdRole(
    projectId: string,
    userId: string,
    role: string
  ) {
    return UserProjectModel.findOne({
      where: {
        projectId,
        userId,
        role,
      },
    });
  }

  static findByUserId(userId: string) {
    return UserProjectModel.findAll({
      where: {
        userId,
      },
    });
  }

  static findByUserIdOwner(userId: string) {
    return UserProjectModel.findAll({
      where: {
        userId,
        role: ProjectMembership.OWNER,
      },
    });
  }
}
