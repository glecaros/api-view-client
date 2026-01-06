import type { File, UploadFormData, UploadResponse } from "../models.js";

export function decodeBase64(value: string): Uint8Array | undefined {
  if(!value) {
    return value as any;
  }
  // Normalize Base64URL to Base64
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/')
    .padEnd(value.length + (4 - (value.length % 4)) % 4, '=');

  return new Uint8Array(Buffer.from(base64, 'base64'));
}export function encodeUint8Array(
  value: Uint8Array | undefined | null,
  encoding: BufferEncoding,
): string | undefined {
  if (!value) {
    return value as any;
  }
  return Buffer.from(value).toString(encoding);
}export function dateDeserializer(date?: string | null): Date {
  if (!date) {
    return date as any;
  }

  return new Date(date);
}export function dateRfc7231Deserializer(date?: string | null): Date {
  if (!date) {
    return date as any;
  }

  return new Date(date);
}export function dateRfc3339Serializer(date?: Date | null): string {
  if (!date) {
    return date as any
  }

  return date.toISOString();
}export function dateRfc7231Serializer(date?: Date | null): string {
  if (!date) {
    return date as any;
  }

  return date.toUTCString();
}export function dateUnixTimestampSerializer(date?: Date | null): number {
  if (!date) {
    return date as any;
  }

  return Math.floor(date.getTime() / 1000);
}export function dateUnixTimestampDeserializer(date?: number | null): Date {
  if (!date) {
    return date as any;
  }

  return new Date(date * 1000);
}export function jsonUploadFormDataToTransportTransform(
  input_?: UploadFormData | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    file: jsonFileToTransportTransform(input_.file),label: input_.label,packageVersion: input_.packageVersion
  }!;
}export function jsonUploadFormDataToApplicationTransform(
  input_?: any,
): UploadFormData {
  if(!input_) {
    return input_ as any;
  }
    return {
    file: jsonFileToApplicationTransform(input_.file),label: input_.label,packageVersion: input_.packageVersion
  }!;
}export function jsonFileToTransportTransform(input_?: File | null): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    contentType: input_.contentType,filename: input_.filename,contents: input_.contents
  }!;
}export function jsonFileToApplicationTransform(input_?: any): File {
  if(!input_) {
    return input_ as any;
  }
    return {
    contentType: input_.contentType,filename: input_.filename,contents: input_.contents
  }!;
}export function jsonUploadResponseToTransportTransform(
  input_?: UploadResponse | null,
): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    content: input_.content
  }!;
}export function jsonUploadResponseToApplicationTransform(
  input_?: any,
): UploadResponse {
  if(!input_) {
    return input_ as any;
  }
    return {
    content: input_.content
  }!;
}
