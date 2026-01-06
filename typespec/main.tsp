import "@typespec/http";
import "@typespec/rest";

using TypeSpec.Http;
using TypeSpec.Rest;

@service(#{title: "APIView Service"})
@server("https://apiview.dev", "APIView Service")
namespace APIViewService;

/**
 * Response from uploading an auto review
 */
model UploadResponse {
    /** The response content from the upload operation */
    content: string;
}

/**
 * Error response model
 */
@error
model ErrorResponse {
    /** Error message */
    message: string;

    /** HTTP status code */
    code: int32;
}

/**
 * Upload form data for auto review using multipart/form-data
 */
model UploadFormData {
    /** The file to upload as binary data */
    file: HttpPart<File>;

    /** The API version label */
    label: HttpPart<string>;

    /** The package version */
    packageVersion: HttpPart<string>;
}

@route("/AutoReview")
interface AutoReview {
    /**
     * Upload a source artifact for automatic review
     */
    @post
    @route("/UploadAutoReview")
    uploadAutoReview(
        /** API Key for authentication */
        @header ApiKey: string,

        @multipartBody body: UploadFormData,
    ): UploadResponse | ErrorResponse;
}
