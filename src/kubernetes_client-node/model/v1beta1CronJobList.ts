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
import { V1beta1CronJob } from './v1beta1CronJob';

/**
 * CronJobList is a collection of cron jobs.
 */
export class V1beta1CronJobList {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  'apiVersion'?: string;
  /**
   * items is the list of CronJobs.
   */
  'items': V1beta1CronJob[];
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
      type: 'Array<V1beta1CronJob>',
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
    return V1beta1CronJobList.attributeTypeMap;
  }
}
