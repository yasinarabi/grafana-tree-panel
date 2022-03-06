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

import { V1ObjectMeta } from './v1ObjectMeta';

/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 */
export class V1ControllerRevision {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  'apiVersion'?: string;
  /**
   * Data is the serialized representation of the state.
   */
  'data'?: object;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  'kind'?: string;
  'metadata'?: V1ObjectMeta;
  /**
   * Revision indicates the revision of the state represented by Data.
   */
  'revision': number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'apiVersion',
      baseName: 'apiVersion',
      type: 'string',
    },
    {
      name: 'data',
      baseName: 'data',
      type: 'object',
    },
    {
      name: 'kind',
      baseName: 'kind',
      type: 'string',
    },
    {
      name: 'metadata',
      baseName: 'metadata',
      type: 'V1ObjectMeta',
    },
    {
      name: 'revision',
      baseName: 'revision',
      type: 'number',
    },
  ];

  static getAttributeTypeMap() {
    return V1ControllerRevision.attributeTypeMap;
  }
}
