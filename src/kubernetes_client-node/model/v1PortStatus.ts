/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.22.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class V1PortStatus {
  /**
   * Error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use   CamelCase names - cloud provider specific error values must have names that comply with the   format foo.example.com/CamelCase.
   */
  'error'?: string;
  /**
   * Port is the port number of the service port of which status is recorded here
   */
  'port': number;
  /**
   * Protocol is the protocol of the service port of which status is recorded here The supported values are: \"TCP\", \"UDP\", \"SCTP\"
   */
  'protocol': string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'error',
      baseName: 'error',
      type: 'string',
    },
    {
      name: 'port',
      baseName: 'port',
      type: 'number',
    },
    {
      name: 'protocol',
      baseName: 'protocol',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return V1PortStatus.attributeTypeMap;
  }
}
