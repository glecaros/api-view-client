# TypeScript Client Usage

This TypeScript client is generated from TypeSpec using the `@typespec/http-client-js` emitter.

## Installation

Build the client from the repository root:

```bash
yarn install
yarn generate:typescript
cd packages/typescript-client
npm install
npm run build
```

## Basic Usage

```typescript
import { ApiViewServiceClient } from "@api-view/typescript-client";

// Create the client
const client = new ApiViewServiceClient({
  endpoint: "https://apiview.dev"
});

// Upload a file for auto review
async function uploadForReview() {
  const file = new File(['/* your code content */'], 'code.ts', { type: 'text/plain' });
  
  const result = await client.autoReviewClient.uploadAutoReview(
    "your-api-key-here",
    {
      file: file,
      label: "v1.0.0",
      packageVersion: "1.0.0"
    }
  );
  
  console.log('Upload response:', result.content);
}

uploadForReview().catch(console.error);
```

## API Structure

The generated client provides:

- **ApiViewServiceClient**: Main client class
- **AutoReviewClient**: Sub-client for auto review operations
- **Type Safety**: Full TypeScript types for requests and responses

## Models

### UploadFormData
- `file: File` - The file to upload
- `label: string` - The API version label
- `packageVersion: string` - The package version

### UploadResponse
- `content: string` - The response content from the upload operation

### ErrorResponse
- `message: string` - Error message
- `code: number` - HTTP status code

## Client Features

- **Modern TypeScript**: Built with ES modules
- **Promise-based**: Async/await support
- **Type Safe**: Complete TypeScript definitions
- **Class-based**: Clean, object-oriented API

## Building

```bash
npm run build
```

This will compile the TypeScript code to JavaScript in the `dist/` directory.

## Development

The client is generated automatically from the TypeSpec definition. Do not manually edit the generated files. Instead:

1. Make changes to `typespec/main.tsp`
2. Run `yarn generate:typescript` from the repository root
3. Rebuild the client with `npm run build`
