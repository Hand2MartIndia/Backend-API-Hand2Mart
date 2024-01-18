import { BaseOtpModel } from "./BaseOtpModel";

export interface FigmaAuthModel extends BaseOtpModel {
  userId?: string;
  userState?: string;
}
