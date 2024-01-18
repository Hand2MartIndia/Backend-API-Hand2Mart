import { PluginLoginStatus } from "../../../enums/PluginLoginStatus";
import { BaseOtpModel } from "../../../model/entity/type/BaseOtpModel";

export interface PluginAuthModel extends BaseOtpModel {
  read_key: string;
  write_key: string;
  status: PluginLoginStatus;
  user_id?: string;
}
