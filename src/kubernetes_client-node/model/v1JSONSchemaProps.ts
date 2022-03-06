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

import { V1ExternalDocumentation } from './v1ExternalDocumentation';

/**
 * JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/).
 */
export class V1JSONSchemaProps {
  '$ref'?: string;
  '$schema'?: string;
  /**
   * JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.
   */
  'additionalItems'?: object;
  /**
   * JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.
   */
  'additionalProperties'?: object;
  'allOf'?: V1JSONSchemaProps[];
  'anyOf'?: V1JSONSchemaProps[];
  /**
   * default is a default value for undefined object fields. Defaulting is a beta feature under the CustomResourceDefaulting feature gate. Defaulting requires spec.preserveUnknownFields to be false.
   */
  '_default'?: object;
  'definitions'?: { [key: string]: V1JSONSchemaProps };
  'dependencies'?: { [key: string]: object };
  'description'?: string;
  '_enum'?: object[];
  /**
   * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
   */
  'example'?: object;
  'exclusiveMaximum'?: boolean;
  'exclusiveMinimum'?: boolean;
  'externalDocs'?: V1ExternalDocumentation;
  /**
   * format is an OpenAPI v3 format string. Unknown formats are ignored. The following formats are validated:  - bsonobjectid: a bson object ID, i.e. a 24 characters hex string - uri: an URI as parsed by Golang net/url.ParseRequestURI - email: an email address as parsed by Golang net/mail.ParseAddress - hostname: a valid representation for an Internet host name, as defined by RFC 1034, section 3.1 [RFC1034]. - ipv4: an IPv4 IP as parsed by Golang net.ParseIP - ipv6: an IPv6 IP as parsed by Golang net.ParseIP - cidr: a CIDR as parsed by Golang net.ParseCIDR - mac: a MAC address as parsed by Golang net.ParseMAC - uuid: an UUID that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid3: an UUID3 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?3[0-9a-f]{3}-?[0-9a-f]{4}-?[0-9a-f]{12}$ - uuid4: an UUID4 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?4[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - uuid5: an UUID5 that allows uppercase defined by the regex (?i)^[0-9a-f]{8}-?[0-9a-f]{4}-?5[0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$ - isbn: an ISBN10 or ISBN13 number string like \"0321751043\" or \"978-0321751041\" - isbn10: an ISBN10 number string like \"0321751043\" - isbn13: an ISBN13 number string like \"978-0321751041\" - creditcard: a credit card number defined by the regex ^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\\d{3})\\d{11})$ with any non digit characters mixed in - ssn: a U.S. social security number following the regex ^\\d{3}[- ]?\\d{2}[- ]?\\d{4}$ - hexcolor: an hexadecimal color code like \"#FFFFFF: following the regex ^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$ - rgbcolor: an RGB color code like rgb like \"rgb(255,255,2559\" - byte: base64 encoded binary data - password: any kind of string - date: a date string like \"2006-01-02\" as defined by full-date in RFC3339 - duration: a duration string like \"22 ns\" as parsed by Golang time.ParseDuration or compatible with Scala duration format - datetime: a date time string like \"2014-12-15T19:30:20.000Z\" as defined by date-time in RFC3339.
   */
  'format'?: string;
  'id'?: string;
  /**
   * JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes.
   */
  'items'?: object;
  'maxItems'?: number;
  'maxLength'?: number;
  'maxProperties'?: number;
  'maximum'?: number;
  'minItems'?: number;
  'minLength'?: number;
  'minProperties'?: number;
  'minimum'?: number;
  'multipleOf'?: number;
  'not'?: V1JSONSchemaProps;
  'nullable'?: boolean;
  'oneOf'?: V1JSONSchemaProps[];
  'pattern'?: string;
  'patternProperties'?: { [key: string]: V1JSONSchemaProps };
  'properties'?: { [key: string]: V1JSONSchemaProps };
  'required'?: string[];
  'title'?: string;
  'type'?: string;
  'uniqueItems'?: boolean;
  /**
   * x-kubernetes-embedded-resource defines that the value is an embedded Kubernetes runtime.Object, with TypeMeta and ObjectMeta. The type must be object. It is allowed to further restrict the embedded object. kind, apiVersion and metadata are validated automatically. x-kubernetes-preserve-unknown-fields is allowed to be true, but does not have to be if the object is fully specified (up to kind, apiVersion, metadata).
   */
  'x_kubernetes_embedded_resource'?: boolean;
  /**
   * x-kubernetes-int-or-string specifies that this value is either an integer or a string. If this is true, an empty type is allowed and type as child of anyOf is permitted if following one of the following patterns:  1) anyOf:    - type: integer    - type: string 2) allOf:    - anyOf:      - type: integer      - type: string    - ... zero or more
   */
  'x_kubernetes_int_or_string'?: boolean;
  /**
   * x-kubernetes-list-map-keys annotates an array with the x-kubernetes-list-type `map` by specifying the keys used as the index of the map.  This tag MUST only be used on lists that have the \"x-kubernetes-list-type\" extension set to \"map\". Also, the values specified for this attribute must be a scalar typed field of the child structure (no nesting is supported).  The properties specified must either be required or have a default value, to ensure those properties are present for all list items.
   */
  'x_kubernetes_list_map_keys'?: string[];
  /**
   * x-kubernetes-list-type annotates an array to further describe its topology. This extension must only be used on lists and may have 3 possible values:  1) `atomic`: the list is treated as a single entity, like a scalar.      Atomic lists will be entirely replaced when updated. This extension      may be used on any type of list (struct, scalar, ...). 2) `set`:      Sets are lists that must not have multiple items with the same value. Each      value must be a scalar, an object with x-kubernetes-map-type `atomic` or an      array with x-kubernetes-list-type `atomic`. 3) `map`:      These lists are like maps in that their elements have a non-index key      used to identify them. Order is preserved upon merge. The map tag      must only be used on a list with elements of type object. Defaults to atomic for arrays.
   */
  'x_kubernetes_list_type'?: string;
  /**
   * x-kubernetes-map-type annotates an object to further describe its topology. This extension must only be used when type is object and may have 2 possible values:  1) `granular`:      These maps are actual maps (key-value pairs) and each fields are independent      from each other (they can each be manipulated by separate actors). This is      the default behaviour for all maps. 2) `atomic`: the list is treated as a single entity, like a scalar.      Atomic maps will be entirely replaced when updated.
   */
  'x_kubernetes_map_type'?: string;
  /**
   * x-kubernetes-preserve-unknown-fields stops the API server decoding step from pruning fields which are not specified in the validation schema. This affects fields recursively, but switches back to normal pruning behaviour if nested properties or additionalProperties are specified in the schema. This can either be true or undefined. False is forbidden.
   */
  'x_kubernetes_preserve_unknown_fields'?: boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
    {
      name: '$ref',
      baseName: '$ref',
      type: 'string',
    },
    {
      name: '$schema',
      baseName: '$schema',
      type: 'string',
    },
    {
      name: 'additionalItems',
      baseName: 'additionalItems',
      type: 'object',
    },
    {
      name: 'additionalProperties',
      baseName: 'additionalProperties',
      type: 'object',
    },
    {
      name: 'allOf',
      baseName: 'allOf',
      type: 'Array<V1JSONSchemaProps>',
    },
    {
      name: 'anyOf',
      baseName: 'anyOf',
      type: 'Array<V1JSONSchemaProps>',
    },
    {
      name: '_default',
      baseName: 'default',
      type: 'object',
    },
    {
      name: 'definitions',
      baseName: 'definitions',
      type: '{ [key: string]: V1JSONSchemaProps; }',
    },
    {
      name: 'dependencies',
      baseName: 'dependencies',
      type: '{ [key: string]: object; }',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
    },
    {
      name: '_enum',
      baseName: 'enum',
      type: 'Array<object>',
    },
    {
      name: 'example',
      baseName: 'example',
      type: 'object',
    },
    {
      name: 'exclusiveMaximum',
      baseName: 'exclusiveMaximum',
      type: 'boolean',
    },
    {
      name: 'exclusiveMinimum',
      baseName: 'exclusiveMinimum',
      type: 'boolean',
    },
    {
      name: 'externalDocs',
      baseName: 'externalDocs',
      type: 'V1ExternalDocumentation',
    },
    {
      name: 'format',
      baseName: 'format',
      type: 'string',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
    {
      name: 'items',
      baseName: 'items',
      type: 'object',
    },
    {
      name: 'maxItems',
      baseName: 'maxItems',
      type: 'number',
    },
    {
      name: 'maxLength',
      baseName: 'maxLength',
      type: 'number',
    },
    {
      name: 'maxProperties',
      baseName: 'maxProperties',
      type: 'number',
    },
    {
      name: 'maximum',
      baseName: 'maximum',
      type: 'number',
    },
    {
      name: 'minItems',
      baseName: 'minItems',
      type: 'number',
    },
    {
      name: 'minLength',
      baseName: 'minLength',
      type: 'number',
    },
    {
      name: 'minProperties',
      baseName: 'minProperties',
      type: 'number',
    },
    {
      name: 'minimum',
      baseName: 'minimum',
      type: 'number',
    },
    {
      name: 'multipleOf',
      baseName: 'multipleOf',
      type: 'number',
    },
    {
      name: 'not',
      baseName: 'not',
      type: 'V1JSONSchemaProps',
    },
    {
      name: 'nullable',
      baseName: 'nullable',
      type: 'boolean',
    },
    {
      name: 'oneOf',
      baseName: 'oneOf',
      type: 'Array<V1JSONSchemaProps>',
    },
    {
      name: 'pattern',
      baseName: 'pattern',
      type: 'string',
    },
    {
      name: 'patternProperties',
      baseName: 'patternProperties',
      type: '{ [key: string]: V1JSONSchemaProps; }',
    },
    {
      name: 'properties',
      baseName: 'properties',
      type: '{ [key: string]: V1JSONSchemaProps; }',
    },
    {
      name: 'required',
      baseName: 'required',
      type: 'Array<string>',
    },
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
    {
      name: 'uniqueItems',
      baseName: 'uniqueItems',
      type: 'boolean',
    },
    {
      name: 'x_kubernetes_embedded_resource',
      baseName: 'x-kubernetes-embedded-resource',
      type: 'boolean',
    },
    {
      name: 'x_kubernetes_int_or_string',
      baseName: 'x-kubernetes-int-or-string',
      type: 'boolean',
    },
    {
      name: 'x_kubernetes_list_map_keys',
      baseName: 'x-kubernetes-list-map-keys',
      type: 'Array<string>',
    },
    {
      name: 'x_kubernetes_list_type',
      baseName: 'x-kubernetes-list-type',
      type: 'string',
    },
    {
      name: 'x_kubernetes_map_type',
      baseName: 'x-kubernetes-map-type',
      type: 'string',
    },
    {
      name: 'x_kubernetes_preserve_unknown_fields',
      baseName: 'x-kubernetes-preserve-unknown-fields',
      type: 'boolean',
    },
  ];

  static getAttributeTypeMap() {
    return V1JSONSchemaProps.attributeTypeMap;
  }
}
