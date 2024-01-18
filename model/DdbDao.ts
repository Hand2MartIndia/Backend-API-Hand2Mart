/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import { DynamoDB } from "aws-sdk";
import { PutItemInputAttributeMap } from "aws-sdk/clients/dynamodb";

export default abstract class DdbDao<Model extends object> {
  // eslint-disable-next-line no-unused-vars, no-empty-function
  constructor(protected tableName: string) {}

  protected toAttributeMap(model: Model): PutItemInputAttributeMap {
    return DynamoDB.Converter.marshall(model);
  }

  protected fromAttributeMap<F, T extends Model>(
    item: DynamoDB.AttributeMap,
    // eslint-disable-next-line no-unused-vars
    Type: new (data: F) => T
  ): T {
    const unmarshall = DynamoDB.Converter.unmarshall(item);
    const instance = new Type({} as F);
    return Object.assign(instance, unmarshall) as T;
  }
}
