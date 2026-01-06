import { type Client, type ClientOptions, getClient } from "@typespec/ts-http-runtime";

export interface AutoReviewClientContext extends Client {

}export interface AutoReviewClientOptions extends ClientOptions {
  endpoint?: string;
}export function createAutoReviewClientContext(
  options?: AutoReviewClientOptions,
): AutoReviewClientContext {
  const params: Record<string, any> = {
    endpoint: options?.endpoint ?? "https://apiview.dev"
  };
  const resolvedEndpoint = "{endpoint}".replace(/{([^}]+)}/g, (_, key) =>
    key in params ? String(params[key]) : (() => { throw new Error(`Missing parameter: ${key}`); })()
  );;return getClient(resolvedEndpoint,{
    ...options,
  })
}
