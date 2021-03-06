/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CheckSchema
// ====================================================

export interface CheckSchema_service_checkSchema_diffToPrevious_changes {
  __typename: "Change";
  /**
   * Indication of the success of the change, either failure, warning, or notice.
   */
  type: ChangeType;
  /**
   * Indication of the kind of target and action of the change, e.g. 'TYPE_REMOVED'.
   */
  code: string;
  /**
   * Explanation of both the target of the change and how it was changed.
   */
  description: string;
}

export interface CheckSchema_service_checkSchema_diffToPrevious_validationConfig {
  __typename: "SchemaDiffValidationConfig";
  from: any | null;
  to: any | null;
  /**
   * Minimum number of requests within the window for a query to be considered.
   */
  queryCountThreshold: number | null;
  /**
   * Number of requests within the window for a query to be considered, relative to total request count.
   * Expected values are between 0 and 0.05 (minimum 5% of total request volume)
   */
  queryCountThresholdPercentage: number | null;
}

export interface CheckSchema_service_checkSchema_diffToPrevious {
  __typename: "SchemaDiff";
  /**
   * Indication of the most frequently occurring ChangeType in the list of changes from this diff.
   */
  type: ChangeType | null;
  changes: CheckSchema_service_checkSchema_diffToPrevious_changes[];
  validationConfig: CheckSchema_service_checkSchema_diffToPrevious_validationConfig | null;
}

export interface CheckSchema_service_checkSchema {
  __typename: "CheckSchemaResult";
  /**
   * generated url to view schema diff in Engine
   */
  targetUrl: string | null;
  diffToPrevious: CheckSchema_service_checkSchema_diffToPrevious;
}

export interface CheckSchema_service {
  __typename: "ServiceMutation";
  /**
   * Validate, diff, and store a schema so the diff
   * can be viewed by users in the UI. This mutation
   * will not mark the schema as "published"
   */
  checkSchema: CheckSchema_service_checkSchema;
}

export interface CheckSchema {
  service: CheckSchema_service | null;
}

export interface CheckSchemaVariables {
  id: string;
  schema: IntrospectionSchemaInput;
  tag?: string | null;
  gitContext?: GitContextInput | null;
  historicParameters?: HistoricQueryParameters | null;
  frontend?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterOperations
// ====================================================

export interface RegisterOperations_service {
  __typename: "ServiceMutation";
  registerOperations: any | null;
}

export interface RegisterOperations {
  service: RegisterOperations_service | null;
}

export interface RegisterOperationsVariables {
  id: string;
  clientIdentity: RegisteredClientIdentityInput;
  operations: RegisteredOperationInput[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SchemaTagInfo
// ====================================================

export interface SchemaTagInfo_service_schema_gitContext {
  __typename: "GitContext";
  committer: string | null;
  commit: string;
}

export interface SchemaTagInfo_service_schema_introspection {
  __typename: "IntrospectionSchema";
  fieldCount: number | null;
  typeCount: number | null;
}

export interface SchemaTagInfo_service_schema {
  __typename: "Schema";
  hash: string;
  gitContext: SchemaTagInfo_service_schema_gitContext | null;
  introspection: SchemaTagInfo_service_schema_introspection;
  createdAt: any;
}

export interface SchemaTagInfo_service {
  __typename: "Service";
  /**
   * Get a schema by hash OR current tag
   */
  schema: SchemaTagInfo_service_schema | null;
}

export interface SchemaTagInfo {
  /**
   * Service by ID
   */
  service: SchemaTagInfo_service | null;
}

export interface SchemaTagInfoVariables {
  service: string;
  tag?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SchemaTagsAndFieldStats
// ====================================================

export interface SchemaTagsAndFieldStats_service_schemaTags {
  __typename: "SchemaTag";
  tag: string;
}

export interface SchemaTagsAndFieldStats_service_stats_fieldStats_groupBy {
  __typename: "ServiceFieldStatsDimensions";
  field: string | null;
}

export interface SchemaTagsAndFieldStats_service_stats_fieldStats_metrics_fieldHistogram {
  __typename: "DurationHistogram";
  durationMs: number | null;
}

export interface SchemaTagsAndFieldStats_service_stats_fieldStats_metrics {
  __typename: "ServiceFieldStatsMetrics";
  fieldHistogram: SchemaTagsAndFieldStats_service_stats_fieldStats_metrics_fieldHistogram;
}

export interface SchemaTagsAndFieldStats_service_stats_fieldStats {
  __typename: "ServiceFieldStatsRecord";
  /**
   * Dimensions of ServiceFieldStats that can be grouped by.
   */
  groupBy: SchemaTagsAndFieldStats_service_stats_fieldStats_groupBy;
  /**
   * Metrics of ServiceFieldStats that can be aggregated over.
   */
  metrics: SchemaTagsAndFieldStats_service_stats_fieldStats_metrics;
}

export interface SchemaTagsAndFieldStats_service_stats {
  __typename: "ServiceStatsWindow";
  fieldStats: SchemaTagsAndFieldStats_service_stats_fieldStats[];
}

export interface SchemaTagsAndFieldStats_service {
  __typename: "Service";
  /**
   * Get schema tags, with optional filtering to a set of tags. Always sorted by creation date in reverse chronological order.
   */
  schemaTags: SchemaTagsAndFieldStats_service_schemaTags[];
  stats: SchemaTagsAndFieldStats_service_stats;
}

export interface SchemaTagsAndFieldStats {
  /**
   * Service by ID
   */
  service: SchemaTagsAndFieldStats_service | null;
}

export interface SchemaTagsAndFieldStatsVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UploadSchema
// ====================================================

export interface UploadSchema_service_uploadSchema_tag_schema {
  __typename: "Schema";
  hash: string;
}

export interface UploadSchema_service_uploadSchema_tag {
  __typename: "SchemaTag";
  tag: string;
  schema: UploadSchema_service_uploadSchema_tag_schema;
}

export interface UploadSchema_service_uploadSchema {
  __typename: "UploadSchemaMutationResponse";
  code: string;
  message: string;
  success: boolean;
  tag: UploadSchema_service_uploadSchema_tag | null;
}

export interface UploadSchema_service {
  __typename: "ServiceMutation";
  /**
   * Upload a schema, while updating a tag in the same operation
   */
  uploadSchema: UploadSchema_service_uploadSchema | null;
}

export interface UploadSchema {
  service: UploadSchema_service | null;
}

export interface UploadSchemaVariables {
  id: string;
  schema: IntrospectionSchemaInput;
  tag: string;
  gitContext?: GitContextInput | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ValidateOperations
// ====================================================

export interface ValidateOperations_service_validateOperations_validationResults_operation {
  __typename: "OperationDocument";
  /**
   * Operation name
   */
  name: string | null;
}

export interface ValidateOperations_service_validateOperations_validationResults {
  __typename: "ValidationResult";
  /**
   * The type of validation error thrown - warning, failure, or invalid.
   */
  type: ValidationErrorType;
  /**
   * The validation result's error code
   */
  code: ValidationErrorCode;
  /**
   * Description of the validation error
   */
  description: string;
  /**
   * The operation related to this validation result
   */
  operation: ValidateOperations_service_validateOperations_validationResults_operation;
}

export interface ValidateOperations_service_validateOperations {
  __typename: "ValidateOperationsResult";
  validationResults: ValidateOperations_service_validateOperations_validationResults[];
}

export interface ValidateOperations_service {
  __typename: "ServiceMutation";
  /**
   * Validate operations against a given schema by tag
   */
  validateOperations: ValidateOperations_service_validateOperations;
}

export interface ValidateOperations {
  service: ValidateOperations_service | null;
}

export interface ValidateOperationsVariables {
  id: string;
  operations: OperationDocumentInput[];
  tag?: string | null;
  gitContext?: GitContextInput | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSchemaByTag
// ====================================================

export interface GetSchemaByTag_service_User {
  __typename: "User" | "InternalIdentity";
}

export interface GetSchemaByTag_service_Service_schema___schema_queryType {
  __typename: "IntrospectionType";
  name: string | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_mutationType {
  __typename: "IntrospectionType";
  name: string | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_subscriptionType {
  __typename: "IntrospectionType";
  name: string | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_fields_args_type_ofType_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_fields_args_type_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_fields_args_type_ofType_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_fields_args_type_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_fields_args_type_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_fields_args_type_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_fields_args_type_ofType_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_fields_args_type_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_fields_args_type_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_fields_args_type_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_fields_args_type_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_fields_args_type_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_fields_args_type_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_fields_args_type {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_fields_args_type_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_fields_args {
  __typename: "IntrospectionInputValue";
  name: string;
  description: string | null;
  type: GetSchemaByTag_service_Service_schema___schema_types_fields_args_type;
  defaultValue: string | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_fields_type_ofType_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_fields_type_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_fields_type_ofType_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_fields_type_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_fields_type_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_fields_type_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_fields_type_ofType_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_fields_type_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_fields_type_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_fields_type_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_fields_type_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_fields_type_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_fields_type_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_fields_type {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_fields_type_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_fields {
  __typename: "IntrospectionField";
  name: string;
  description: string | null;
  args: GetSchemaByTag_service_Service_schema___schema_types_fields_args[];
  type: GetSchemaByTag_service_Service_schema___schema_types_fields_type;
  isDeprecated: boolean;
  deprecationReason: string | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_inputFields_type_ofType_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_inputFields_type_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_inputFields_type_ofType_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_inputFields_type_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_inputFields_type_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_inputFields_type_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_inputFields_type_ofType_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_inputFields_type_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_inputFields_type_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_inputFields_type_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_inputFields_type_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_inputFields_type_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_inputFields_type_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_inputFields_type {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_inputFields_type_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_inputFields {
  __typename: "IntrospectionInputValue";
  name: string;
  description: string | null;
  type: GetSchemaByTag_service_Service_schema___schema_types_inputFields_type;
  defaultValue: string | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_interfaces_ofType_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_interfaces_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_interfaces_ofType_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_interfaces_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_interfaces_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_interfaces_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_interfaces_ofType_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_interfaces_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_interfaces_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_interfaces_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_interfaces_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_interfaces_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_interfaces_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_interfaces {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_interfaces_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_enumValues {
  __typename: "IntrospectionEnumValue";
  name: string;
  description: string | null;
  isDeprecated: boolean;
  depreactionReason: string | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_possibleTypes_ofType_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_possibleTypes_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_possibleTypes_ofType_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_possibleTypes_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_possibleTypes_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_possibleTypes_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_possibleTypes_ofType_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_possibleTypes_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_possibleTypes_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_possibleTypes_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_possibleTypes_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_possibleTypes_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_possibleTypes_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types_possibleTypes {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_types_possibleTypes_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_types {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  description: string | null;
  fields: GetSchemaByTag_service_Service_schema___schema_types_fields[] | null;
  inputFields: GetSchemaByTag_service_Service_schema___schema_types_inputFields[] | null;
  interfaces: GetSchemaByTag_service_Service_schema___schema_types_interfaces[] | null;
  enumValues: GetSchemaByTag_service_Service_schema___schema_types_enumValues[] | null;
  possibleTypes: GetSchemaByTag_service_Service_schema___schema_types_possibleTypes[] | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_directives_args_type_ofType_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_directives_args_type_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_directives_args_type_ofType_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_directives_args_type_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_directives_args_type_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_directives_args_type_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_directives_args_type_ofType_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_directives_args_type_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_directives_args_type_ofType_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_directives_args_type_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_directives_args_type_ofType_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_directives_args_type_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_directives_args_type_ofType_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_directives_args_type {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: GetSchemaByTag_service_Service_schema___schema_directives_args_type_ofType | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_directives_args {
  __typename: "IntrospectionInputValue";
  name: string;
  description: string | null;
  type: GetSchemaByTag_service_Service_schema___schema_directives_args_type;
  defaultValue: string | null;
}

export interface GetSchemaByTag_service_Service_schema___schema_directives {
  __typename: "IntrospectionDirective";
  name: string;
  description: string | null;
  locations: IntrospectionDirectiveLocation[];
  args: GetSchemaByTag_service_Service_schema___schema_directives_args[];
}

export interface GetSchemaByTag_service_Service_schema___schema {
  __typename: "IntrospectionSchema";
  queryType: GetSchemaByTag_service_Service_schema___schema_queryType;
  mutationType: GetSchemaByTag_service_Service_schema___schema_mutationType | null;
  subscriptionType: GetSchemaByTag_service_Service_schema___schema_subscriptionType | null;
  types: GetSchemaByTag_service_Service_schema___schema_types[];
  directives: GetSchemaByTag_service_Service_schema___schema_directives[];
}

export interface GetSchemaByTag_service_Service_schema {
  __typename: "Schema";
  hash: string;
  __schema: GetSchemaByTag_service_Service_schema___schema;
}

export interface GetSchemaByTag_service_Service {
  __typename: "Service";
  /**
   * Get a schema by hash OR current tag
   */
  schema: GetSchemaByTag_service_Service_schema | null;
}

export type GetSchemaByTag_service = GetSchemaByTag_service_User | GetSchemaByTag_service_Service;

export interface GetSchemaByTag {
  /**
   * Current identity, null if not authenticated
   */
  service: GetSchemaByTag_service | null;
}

export interface GetSchemaByTagVariables {
  tag: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: IntrospectionFullType
// ====================================================

export interface IntrospectionFullType_fields_args_type_ofType_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
}

export interface IntrospectionFullType_fields_args_type_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_fields_args_type_ofType_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_fields_args_type_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_fields_args_type_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_fields_args_type_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_fields_args_type_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_fields_args_type_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_fields_args_type_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_fields_args_type_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_fields_args_type_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_fields_args_type_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_fields_args_type_ofType_ofType | null;
}

export interface IntrospectionFullType_fields_args_type {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_fields_args_type_ofType | null;
}

export interface IntrospectionFullType_fields_args {
  __typename: "IntrospectionInputValue";
  name: string;
  description: string | null;
  type: IntrospectionFullType_fields_args_type;
  defaultValue: string | null;
}

export interface IntrospectionFullType_fields_type_ofType_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
}

export interface IntrospectionFullType_fields_type_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_fields_type_ofType_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_fields_type_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_fields_type_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_fields_type_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_fields_type_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_fields_type_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_fields_type_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_fields_type_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_fields_type_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_fields_type_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_fields_type_ofType_ofType | null;
}

export interface IntrospectionFullType_fields_type {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_fields_type_ofType | null;
}

export interface IntrospectionFullType_fields {
  __typename: "IntrospectionField";
  name: string;
  description: string | null;
  args: IntrospectionFullType_fields_args[];
  type: IntrospectionFullType_fields_type;
  isDeprecated: boolean;
  deprecationReason: string | null;
}

export interface IntrospectionFullType_inputFields_type_ofType_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
}

export interface IntrospectionFullType_inputFields_type_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_inputFields_type_ofType_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_inputFields_type_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_inputFields_type_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_inputFields_type_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_inputFields_type_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_inputFields_type_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_inputFields_type_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_inputFields_type_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_inputFields_type_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_inputFields_type_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_inputFields_type_ofType_ofType | null;
}

export interface IntrospectionFullType_inputFields_type {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_inputFields_type_ofType | null;
}

export interface IntrospectionFullType_inputFields {
  __typename: "IntrospectionInputValue";
  name: string;
  description: string | null;
  type: IntrospectionFullType_inputFields_type;
  defaultValue: string | null;
}

export interface IntrospectionFullType_interfaces_ofType_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
}

export interface IntrospectionFullType_interfaces_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_interfaces_ofType_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_interfaces_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_interfaces_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_interfaces_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_interfaces_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_interfaces_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_interfaces_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_interfaces_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_interfaces_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_interfaces_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_interfaces_ofType_ofType | null;
}

export interface IntrospectionFullType_interfaces {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_interfaces_ofType | null;
}

export interface IntrospectionFullType_enumValues {
  __typename: "IntrospectionEnumValue";
  name: string;
  description: string | null;
  isDeprecated: boolean;
  depreactionReason: string | null;
}

export interface IntrospectionFullType_possibleTypes_ofType_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
}

export interface IntrospectionFullType_possibleTypes_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_possibleTypes_ofType_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_possibleTypes_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_possibleTypes_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_possibleTypes_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_possibleTypes_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_possibleTypes_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_possibleTypes_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_possibleTypes_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_possibleTypes_ofType_ofType_ofType | null;
}

export interface IntrospectionFullType_possibleTypes_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_possibleTypes_ofType_ofType | null;
}

export interface IntrospectionFullType_possibleTypes {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionFullType_possibleTypes_ofType | null;
}

export interface IntrospectionFullType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  description: string | null;
  fields: IntrospectionFullType_fields[] | null;
  inputFields: IntrospectionFullType_inputFields[] | null;
  interfaces: IntrospectionFullType_interfaces[] | null;
  enumValues: IntrospectionFullType_enumValues[] | null;
  possibleTypes: IntrospectionFullType_possibleTypes[] | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: IntrospectionInputValue
// ====================================================

export interface IntrospectionInputValue_type_ofType_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
}

export interface IntrospectionInputValue_type_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionInputValue_type_ofType_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionInputValue_type_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionInputValue_type_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionInputValue_type_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionInputValue_type_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionInputValue_type_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionInputValue_type_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionInputValue_type_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionInputValue_type_ofType_ofType_ofType | null;
}

export interface IntrospectionInputValue_type_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionInputValue_type_ofType_ofType | null;
}

export interface IntrospectionInputValue_type {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionInputValue_type_ofType | null;
}

export interface IntrospectionInputValue {
  __typename: "IntrospectionInputValue";
  name: string;
  description: string | null;
  type: IntrospectionInputValue_type;
  defaultValue: string | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: IntrospectionTypeRef
// ====================================================

export interface IntrospectionTypeRef_ofType_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
}

export interface IntrospectionTypeRef_ofType_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionTypeRef_ofType_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionTypeRef_ofType_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionTypeRef_ofType_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionTypeRef_ofType_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionTypeRef_ofType_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionTypeRef_ofType_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionTypeRef_ofType_ofType_ofType_ofType | null;
}

export interface IntrospectionTypeRef_ofType_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionTypeRef_ofType_ofType_ofType | null;
}

export interface IntrospectionTypeRef_ofType {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionTypeRef_ofType_ofType | null;
}

export interface IntrospectionTypeRef {
  __typename: "IntrospectionType";
  kind: IntrospectionTypeKind | null;
  name: string | null;
  ofType: IntrospectionTypeRef_ofType | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ChangeType {
  FAILURE = "FAILURE",
  NOTICE = "NOTICE",
  WARNING = "WARNING",
}

/**
 * __DirectiveLocation introspection type
 */
export enum IntrospectionDirectiveLocation {
  ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION",
  ENUM = "ENUM",
  ENUM_VALUE = "ENUM_VALUE",
  FIELD = "FIELD",
  FIELD_DEFINITION = "FIELD_DEFINITION",
  FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION",
  FRAGMENT_SPREAD = "FRAGMENT_SPREAD",
  INLINE_FRAGMENT = "INLINE_FRAGMENT",
  INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION",
  INPUT_OBJECT = "INPUT_OBJECT",
  INTERFACE = "INTERFACE",
  MUTATION = "MUTATION",
  OBJECT = "OBJECT",
  QUERY = "QUERY",
  SCALAR = "SCALAR",
  SCHEMA = "SCHEMA",
  SUBSCRIPTION = "SUBSCRIPTION",
  UNION = "UNION",
}

export enum IntrospectionTypeKind {
  ENUM = "ENUM",
  INPUT_OBJECT = "INPUT_OBJECT",
  INTERFACE = "INTERFACE",
  LIST = "LIST",
  NON_NULL = "NON_NULL",
  OBJECT = "OBJECT",
  SCALAR = "SCALAR",
  UNION = "UNION",
}

export enum ValidationErrorCode {
  DEPRECATED_FIELD = "DEPRECATED_FIELD",
  INVALID_OPERATION = "INVALID_OPERATION",
  NON_PARSEABLE_DOCUMENT = "NON_PARSEABLE_DOCUMENT",
}

export enum ValidationErrorType {
  FAILURE = "FAILURE",
  INVALID = "INVALID",
  WARNING = "WARNING",
}

/**
 * This is stored with a schema when it is uploaded
 */
export interface GitContextInput {
  remoteUrl?: string | null;
  commit: string;
  committer?: string | null;
  message?: string | null;
  branch?: string | null;
}

export interface HistoricQueryParameters {
  from?: any | null;
  to?: any | null;
  queryCountThreshold?: number | null;
  queryCountThresholdPercentage?: number | null;
}

export interface IntrospectionDirectiveInput {
  name: string;
  description?: string | null;
  locations: IntrospectionDirectiveLocation[];
  args: IntrospectionInputValueInput[];
}

/**
 * __EnumValue introspection type
 */
export interface IntrospectionEnumValueInput {
  name: string;
  description?: string | null;
  isDeprecated: boolean;
  deprecationReason?: string | null;
}

/**
 * __Field introspection type
 */
export interface IntrospectionFieldInput {
  name: string;
  description?: string | null;
  args: IntrospectionInputValueInput[];
  type: IntrospectionTypeInput;
  isDeprecated: boolean;
  deprecationReason?: string | null;
}

/**
 * __Value introspection type
 */
export interface IntrospectionInputValueInput {
  name: string;
  description?: string | null;
  type: IntrospectionTypeInput;
  defaultValue?: string | null;
}

/**
 * __Schema introspection type
 */
export interface IntrospectionSchemaInput {
  types?: IntrospectionTypeInput[] | null;
  queryType: IntrospectionTypeRefInput;
  mutationType?: IntrospectionTypeRefInput | null;
  subscriptionType?: IntrospectionTypeRefInput | null;
  directives: IntrospectionDirectiveInput[];
}

/**
 * __Type introspection type
 */
export interface IntrospectionTypeInput {
  kind: IntrospectionTypeKind;
  name?: string | null;
  description?: string | null;
  fields?: IntrospectionFieldInput[] | null;
  interfaces?: IntrospectionTypeInput[] | null;
  possibleTypes?: IntrospectionTypeInput[] | null;
  enumValues?: IntrospectionEnumValueInput[] | null;
  inputFields?: IntrospectionInputValueInput[] | null;
  ofType?: IntrospectionTypeInput | null;
}

/**
 * Shallow __Type introspection type
 */
export interface IntrospectionTypeRefInput {
  name: string;
  kind?: string | null;
}

export interface OperationDocumentInput {
  body: string;
  name?: string | null;
}

export interface RegisteredClientIdentityInput {
  identifier: string;
  name: string;
  version?: string | null;
}

export interface RegisteredOperationInput {
  signature: string;
  document?: string | null;
  metadata?: RegisteredOperationMetadataInput | null;
}

export interface RegisteredOperationMetadataInput {
  engineSignature?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
