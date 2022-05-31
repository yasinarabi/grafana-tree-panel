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

/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export class V1NonResourceAttributes {
  /**
   * Path is the URL path of the request
   */
  'path'?: string;
  /**
   * Verb is the standard HTTP verb
   */
  'verb'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'path',
      baseName: 'path',
      type: 'string',
    },
    {
      name: 'verb',
      baseName: 'verb',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return V1NonResourceAttributes.attributeTypeMap;
  }
}
