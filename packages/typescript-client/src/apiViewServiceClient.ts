import { type ApiViewServiceClientContext, type ApiViewServiceClientOptions, createApiViewServiceClientContext } from "./api/apiViewServiceClientContext.js";
import { type AutoReviewClientContext, type AutoReviewClientOptions, createAutoReviewClientContext } from "./api/autoReviewClient/autoReviewClientContext.js";
import { uploadAutoReview, type UploadAutoReviewOptions } from "./api/autoReviewClient/autoReviewClientOperations.js";
import type { UploadFormData } from "./models/models.js";

export class ApiViewServiceClient {
  #context: ApiViewServiceClientContext
  autoReviewClient: AutoReviewClient
  constructor(options?: ApiViewServiceClientOptions) {
    this.#context = createApiViewServiceClientContext(options);
    this.autoReviewClient = new AutoReviewClient(options);
  }

}
export class AutoReviewClient {
  #context: AutoReviewClientContext

  constructor(options?: AutoReviewClientOptions) {
    this.#context = createAutoReviewClientContext(options);

  }
  async uploadAutoReview(
    apiKey: string,
    body: UploadFormData,
    options?: UploadAutoReviewOptions,
  ) {
    return uploadAutoReview(this.#context, apiKey, body, options);
  }
}
