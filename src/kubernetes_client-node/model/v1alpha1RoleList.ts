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

import { V1ListMeta } from './v1ListMeta';
import { V1alpha1Role } from './v1alpha1Role';

/**
 * RoleList is a collection of Roles. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleList, and will no longer be served in v1.22.
 */
export class V1alpha1RoleList {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  'apiVersion'?: string;
  /**
   * Items is a list of Roles
   */
  'items': V1alpha1Role[];
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  'kind'?: string;
  'metadata'?: V1ListMeta;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'apiVersion',
      baseName: 'apiVersion',
      type: 'string',
    },
    {
      name: 'items',
      baseName: 'items',
      type: 'Array<V1alpha1Role>',
    },
    {
      name: 'kind',
      baseName: 'kind',
      type: 'string',
    },
    {
      name: 'metadata',
      baseName: 'metadata',
      type: 'V1ListMeta',
    },
  ];

  static getAttributeTypeMap() {
    return V1alpha1RoleList.attributeTypeMap;
  }
}
