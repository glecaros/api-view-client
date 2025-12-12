// Licensed under the MIT License.

import { APIViewServiceContext } from "../../api/apiViewServiceContext.js";
import { uploadAutoReview } from "../../api/autoReview/operations.js";
import { AutoReviewUploadAutoReviewOptionalParams } from "../../api/autoReview/options.js";
import { UploadFormData, UploadResponse } from "../../models/models.js";

/** Interface representing a AutoReview operations. */
export interface AutoReviewOperations {
  /** Upload a source artifact for automatic review */
  uploadAutoReview: (
    apiKey: string,
    body: UploadFormData,
    options?: AutoReviewUploadAutoReviewOptionalParams,
  ) => Promise<UploadResponse>;
}

function _getAutoReview(context: APIViewServiceContext) {
  return {
    uploadAutoReview: (
      apiKey: string,
      body: UploadFormData,
      options?: AutoReviewUploadAutoReviewOptionalParams,
    ) => uploadAutoReview(context, apiKey, body, options),
  };
}

export function _getAutoReviewOperations(context: APIViewServiceContext): AutoReviewOperations {
  return {
    ..._getAutoReview(context),
  };
}
