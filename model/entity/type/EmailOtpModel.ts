import { BaseOtpModel } from "../../../model/entity/type/BaseOtpModel";

export interface EmailOtpModel extends BaseOtpModel {
  email: string;
  password: string;
  otp: string;
}
