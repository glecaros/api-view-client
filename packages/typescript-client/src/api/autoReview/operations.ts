// Licensed under the MIT License.

import { APIViewServiceContext as Client } from "../index.js";
import {
  UploadFormData,
  uploadFormDataSerializer,
  UploadResponse,
  uploadResponseDeserializer,
  errorResponseDeserializer,
} from "../../models/models.js";
import { AutoReviewUploadAutoReviewOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _uploadAutoReviewSend(
  context: Client,
  apiKey: string,
  body: UploadFormData,
  options: AutoReviewUploadAutoReviewOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/AutoReview/UploadAutoReview")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "multipart/form-data",
      headers: {
        "api-key": apiKey,
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: uploadFormDataSerializer(body),
    });
}

export async function _uploadAutoReviewDeserialize(
  result: PathUncheckedResponse,
): Promise<UploadResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return uploadResponseDeserializer(result.body);
}

/** Upload a source artifact for automatic review */
export async function uploadAutoReview(
  context: Client,
  apiKey: string,
  body: UploadFormData,
  options: AutoReviewUploadAutoReviewOptionalParams = { requestOptions: {} },
): Promise<UploadResponse> {
  const result = await _uploadAutoReviewSend(context, apiKey, body, options);
  return _uploadAutoReviewDeserialize(result);
}
