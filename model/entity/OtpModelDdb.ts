import { TypeOtpModel } from "./type/TypeOtpModel";
import { OtpModelType } from "../../enums/OtpModelType";

export abstract class OtpModelDdb<T extends OtpModelType> {
  readonly pk: string;

  readonly sk: T;

  protected readonly device_id: string;

  readonly ttl: number;

  readonly version: string;

  protected constructor(model: TypeOtpModel<T>) {
    this.pk = model.txnId;
    this.sk = model.type;
    this.device_id = model.deviceId;
    this.ttl = model.ttl;
    this.version = model.version;
  }

  get deviceId(): string {
    return this.device_id;
  }
}
