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

import { V1Toleration } from './v1Toleration';

/**
 * Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass.
 */
export class V1beta1Scheduling {
  /**
   * nodeSelector lists labels that must be present on nodes that support this RuntimeClass. Pods using this RuntimeClass can only be scheduled to a node matched by this selector. The RuntimeClass nodeSelector is merged with a pod\'s existing nodeSelector. Any conflicts will cause the pod to be rejected in admission.
   */
  'nodeSelector'?: { [key: string]: string };
  /**
   * tolerations are appended (excluding duplicates) to pods running with this RuntimeClass during admission, effectively unioning the set of nodes tolerated by the pod and the RuntimeClass.
   */
  'tolerations'?: V1Toleration[];

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'nodeSelector',
      baseName: 'nodeSelector',
      type: '{ [key: string]: string; }',
    },
    {
      name: 'tolerations',
      baseName: 'tolerations',
      type: 'Array<V1Toleration>',
    },
  ];

  static getAttributeTypeMap() {
    return V1beta1Scheduling.attributeTypeMap;
  }
}
