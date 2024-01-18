import { OtpModelType } from "../../../enums/OtpModelType";
import { BaseOtpModel } from "../../../model/entity/type/BaseOtpModel";

export interface TypeOtpModel<T extends OtpModelType = OtpModelType>
  extends BaseOtpModel {
  type: T;
}
