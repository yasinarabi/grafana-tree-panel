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

import { V1LabelSelector } from './v1LabelSelector';

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export class V2beta1PodsMetricSource {
  /**
   * metricName is the name of the metric in question
   */
  'metricName': string;
  'selector'?: V1LabelSelector;
  /**
   * targetAverageValue is the target value of the average of the metric across all relevant pods (as a quantity)
   */
  'targetAverageValue': string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: 'metricName',
      baseName: 'metricName',
      type: 'string',
    },
    {
      name: 'selector',
      baseName: 'selector',
      type: 'V1LabelSelector',
    },
    {
      name: 'targetAverageValue',
      baseName: 'targetAverageValue',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return V2beta1PodsMetricSource.attributeTypeMap;
  }
}
