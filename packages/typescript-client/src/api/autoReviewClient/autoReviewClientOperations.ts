import { parse } from "uri-template";
import { AutoReviewClientContext } from "./autoReviewClientContext.js";
import { createRestError } from "../../helpers/error.js";
import type { OperationOptions } from "../../helpers/interfaces.js";
import { createFilePartDescriptor } from "../../helpers/multipart-helpers.js";
import { jsonUploadResponseToApplicationTransform } from "../../models/internal/serializers.js";
import { UploadFormData, type UploadResponse } from "../../models/models.js";

export interface UploadAutoReviewOptions extends OperationOptions {

}
/**
 * Upload a source artifact for automatic review
 *
 * @param {AutoReviewClientContext} client
 * @param {string} apiKey
 * @param {UploadFormData} body
 * @param {UploadAutoReviewOptions} [options]
 */
export async function uploadAutoReview(
  client: AutoReviewClientContext,
  apiKey: string,
  body: UploadFormData,
  options?: UploadAutoReviewOptions,
): Promise<UploadResponse> {
  const path = parse("/AutoReview/UploadAutoReview").expand({

  });
  const httpRequestOptions = {
    headers: {
      "api-key": apiKey
    },body: [createFilePartDescriptor("file", body.file),
    {
      name: "label",
      body: body.label
    },
    {
      name: "packageVersion",
      body: body.packageVersion
    }],
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions);

  ;
  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonUploadResponseToApplicationTransform(response.body)!;
  }
  throw createRestError(response);
}
;
