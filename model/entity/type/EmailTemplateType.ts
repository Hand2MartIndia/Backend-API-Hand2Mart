export interface EmailTemplateType {
  Destination: {
    /* required */ CcAddresses?: Array<string>;
    ToAddresses: Array<string>;
  };
  Source: string /* required */;
  Template: string /* required */;
  TemplateData: string;
  ReplyToAddresses?: Array<string>;
}
