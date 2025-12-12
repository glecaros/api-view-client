// Licensed under the MIT License.

import { FileContents, createFilePartDescriptor } from "../static-helpers/multipartHelpers.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Upload form data for auto review using multipart/form-data */
export interface UploadFormData {
  /** The file to upload as binary data */
  file: FileContents | { contents: FileContents; contentType?: string; filename?: string };
  /** The API version label */
  label: string;
  /** The package version */
  packageVersion: string;
}

export function uploadFormDataSerializer(item: UploadFormData): any {
  return [
    createFilePartDescriptor("file", item["file"]),
    { name: "label", body: item["label"] },
    { name: "packageVersion", body: item["packageVersion"] },
  ];
}

/** Response from uploading an auto review */
export interface UploadResponse {
  /** The response content from the upload operation */
  content: string;
}

export function uploadResponseDeserializer(item: any): UploadResponse {
  return {
    content: item["content"],
  };
}

/** Error response model */
export interface ErrorResponse {
  /** Error message */
  message: string;
  /** HTTP status code */
  code: number;
}

export function errorResponseDeserializer(item: any): ErrorResponse {
  return {
    message: item["message"],
    code: item["code"],
  };
}
