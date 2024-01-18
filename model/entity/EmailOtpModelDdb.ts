import { OtpModelDdb } from "../../model/entity/OtpModelDdb";
import { EmailOtpModel } from "../../model/entity/type/EmailOtpModel";
import { OtpModelType } from "../../enums/OtpModelType";

export class EmailOtpModelDdb extends OtpModelDdb<OtpModelType.EMAIL_OTP> {
  readonly email: string;

  readonly otp: string;

  readonly password: string;

  constructor(emailModel: EmailOtpModel) {
    super({
      type: OtpModelType.EMAIL_OTP,
      ...emailModel,
    });
    this.email = emailModel.email;
    this.otp = emailModel.otp;
    this.password = emailModel.password;
  }
}
