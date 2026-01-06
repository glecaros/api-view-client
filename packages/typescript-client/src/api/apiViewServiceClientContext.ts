import { type Client, type ClientOptions, getClient } from "@typespec/ts-http-runtime";

export interface ApiViewServiceClientContext extends Client {

}export interface ApiViewServiceClientOptions extends ClientOptions {
  endpoint?: string;
}export function createApiViewServiceClientContext(
  options?: ApiViewServiceClientOptions,
): ApiViewServiceClientContext {
  const params: Record<string, any> = {
    endpoint: options?.endpoint ?? "https://apiview.dev"
  };
  const resolvedEndpoint = "{endpoint}".replace(/{([^}]+)}/g, (_, key) =>
    key in params ? String(params[key]) : (() => { throw new Error(`Missing parameter: ${key}`); })()
  );;return getClient(resolvedEndpoint,{
    ...options,
  })
}
