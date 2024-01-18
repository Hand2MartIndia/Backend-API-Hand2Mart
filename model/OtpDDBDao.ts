/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import { DynamoDb } from "../config/aws";
import { DynamoDB } from "aws-sdk";
import { DynamoDDBConfig } from "../config/config";
import { OtpModelDdb } from "./entity/OtpModelDdb";
import DdbDao from "../model/DdbDao";
import { getEpoch } from "../utils/DateTimeUtils";
import logger from "../logger";
import { OtpModelType } from "../enums/OtpModelType";
import { BaseOtpModel } from "../model/entity/type/BaseOtpModel";
import { ExpressionAttributeValueMap } from "aws-sdk/clients/dynamodb";

class OtpModelDao extends DdbDao<OtpModelDdb<OtpModelType>> {
  async findByPkAndType<
    F extends BaseOtpModel,
    K extends OtpModelDdb<OtpModelType>
    // eslint-disable-next-line no-unused-vars
  >(
    pk: string,
    type: OtpModelType,
    // eslint-disable-next-line no-unused-vars
    model: new (data: F) => K
  ): Promise<K | null> {
    const queryOutput: DynamoDB.QueryOutput = await DynamoDb.query({
      ExpressionAttributeValues: {
        ":pk": { S: pk },
        ":sk": { S: type },
      },
      KeyConditionExpression: "pk = :pk and sk = :sk ",
      TableName: this.tableName,
      ReturnConsumedCapacity: "TOTAL",
    }).promise();
    const epoch = getEpoch().toString();
    const finalResult = queryOutput.Items?.filter((item) => {
      return item.ttl > epoch;
    });
    if (queryOutput.ConsumedCapacity?.CapacityUnits ?? 0 > 0.5) {
      logger.error(
        `Read capacity used more than 0.5 to fetch a row : ${JSON.stringify({
          ...queryOutput,
          Items: null,
        })} `
      );
    }

    const otpModelDdbTypes = (finalResult ?? []).map((item) =>
      this.fromAttributeMap(item, model)
    );
    return otpModelDdbTypes[0] ?? null;
  }

  async put<T extends OtpModelType>(otpModelDdb: OtpModelDdb<T>) {
    const attributeMap = this.toAttributeMap(otpModelDdb);
    const query: DynamoDB.PutItemInput = {
      TableName: this.tableName,
      Item: attributeMap,
      ReturnConsumedCapacity: "TOTAL",
      ConditionExpression:
        "attribute_not_exists(pk) AND attribute_not_exists(sk) OR #ttl < :now",
      ExpressionAttributeValues: {
        ":now": { N: otpModelDdb.ttl.toString() },
      },
      ExpressionAttributeNames: {
        "#ttl": "ttl",
      },
      ReturnItemCollectionMetrics: "SIZE",
      ReturnValues: "NONE",
    };
    const putItemOutput = await DynamoDb.putItem(query).promise();
    if (putItemOutput.ConsumedCapacity?.CapacityUnits ?? 0 > 1) {
      logger.error(
        `write capacity used more than 1 to put a row : ${JSON.stringify({
          ...putItemOutput,
          Items: null,
        })} `
      );
    }

    return putItemOutput;
  }

  async clobber<T extends OtpModelType>(otpModelDdb: OtpModelDdb<T>) {
    const attributeMap = this.toAttributeMap(otpModelDdb);

    let updateExpression = "set ";
    const expressionAttributeValues = {} as ExpressionAttributeValueMap;
    for (const attributeName in attributeMap) {
      if (
        attributeName !== "pk" &&
        attributeName !== "sk" &&
        attributeName !== "ttl"
      ) {
        updateExpression += `${attributeName} = :${attributeName}, `;
        expressionAttributeValues[`:${attributeName}`] =
          attributeMap[attributeName];
      }
    }

    // Remove trailing comma and space
    updateExpression = updateExpression.slice(0, -2);
    const query: DynamoDB.UpdateItemInput = {
      TableName: this.tableName,
      //AttributeUpdates: attributeMap,
      UpdateExpression: updateExpression,
      ReturnConsumedCapacity: "TOTAL",
      ExpressionAttributeValues: {
        ...expressionAttributeValues,
      },
      // ExpressionAttributeNames: {
      //   "#ttl": "ttl",
      // },
      ReturnItemCollectionMetrics: "SIZE",
      ReturnValues: "NONE",
      Key: {
        pk: { S: otpModelDdb.pk },
        sk: { S: otpModelDdb.sk },
      },
    };
    const putItemOutput = await DynamoDb.updateItem(query).promise();
    if (putItemOutput.ConsumedCapacity?.CapacityUnits ?? 0 > 1) {
      logger.error(
        `write capacity used more than 1 to put a row : ${JSON.stringify({
          ...putItemOutput,
          Items: null,
        })} `
      );
    }

    return putItemOutput;
  }

  async deleteByPkAndType<K extends OtpModelDdb<OtpModelType>>(otpModel: K) {
    const deleteQuery: DynamoDB.DeleteItemInput = {
      TableName: this.tableName,
      Key: {
        pk: { S: otpModel.pk },
        sk: { S: otpModel.sk },
      },
    };
    // todo: check for version it's same or not
    const deletedOtpRow = await DynamoDb.deleteItem(deleteQuery).promise();
    if (deletedOtpRow.ConsumedCapacity?.CapacityUnits ?? 0 > 1) {
      logger.error(
        `write capacity used more than 1 to put a row : ${JSON.stringify({
          ...deletedOtpRow,
          Items: null,
        })} `
      );
    }

    return deletedOtpRow;
  }
}

let instance: OtpModelDao | null = null;

const createOtpModelDaoInstance = (): OtpModelDao => {
  if (!instance) {
    instance = new OtpModelDao(DynamoDDBConfig.tokenDDB.tableName);
  }

  return instance;
};

export default createOtpModelDaoInstance;
