// Licensed under the MIT License.

import {
  createAPIViewService,
  APIViewServiceContext,
  APIViewServiceClientOptionalParams,
} from "./api/index.js";
import { AutoReviewOperations, _getAutoReviewOperations } from "./classic/autoReview/index.js";
import { Pipeline } from "@typespec/ts-http-runtime";

export { APIViewServiceClientOptionalParams } from "./api/apiViewServiceContext.js";

export class APIViewServiceClient {
  private _client: APIViewServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(options: APIViewServiceClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createAPIViewService({ ...options, userAgentOptions: { userAgentPrefix } });
    this.pipeline = this._client.pipeline;
    this.autoReview = _getAutoReviewOperations(this._client);
  }

  /** The operation groups for autoReview */
  public readonly autoReview: AutoReviewOperations;
}
