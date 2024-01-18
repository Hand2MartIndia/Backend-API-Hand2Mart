import { OtpModelDdb } from "./OtpModelDdb";
import { FigmaAuthModel } from "./type/FigmaAuthModel";
import { OtpModelType } from "../../enums/OtpModelType";

export class FigmaAuthModelDdb extends OtpModelDdb<OtpModelType.FIGMA_STATE> {
  userId?: string | undefined;

  userState?: string | undefined;

  constructor(figmaOtpModel: FigmaAuthModel) {
    super({
      type: OtpModelType.FIGMA_STATE,
      ...figmaOtpModel,
    });
    this.userId = figmaOtpModel.userId;
    this.userState = figmaOtpModel.userState;
  }
}
