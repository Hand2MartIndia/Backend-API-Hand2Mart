import { OtpModelDdb } from "../../model/entity/OtpModelDdb";
import { OtpModelType } from "../../enums/OtpModelType";
import { PluginAuthModel } from "./type/PluginAuthModel";
import { PluginLoginStatus } from "src/enums/PluginLoginStatus";

// new types for read and write key seperately
// eslint-disable-next-line max-len
export class PluginAuthModelDdb extends OtpModelDdb<OtpModelType.KEY> {
  readonly readKey: string;

  readonly writeKey: string;

  readonly status: PluginLoginStatus;

  readonly userId?: string | undefined;

  constructor(pluginAuthModel: PluginAuthModel) {
    super({
      type: OtpModelType.KEY,
      ...pluginAuthModel,
    });
    this.readKey = pluginAuthModel.read_key;
    this.writeKey = pluginAuthModel.write_key;
    this.status = pluginAuthModel.status;
    this.userId = pluginAuthModel.user_id;
  }
}
