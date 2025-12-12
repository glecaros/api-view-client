# TypeScript Client Usage

This TypeScript client is generated from TypeSpec using the `@azure-tools/typespec-ts` emitter.

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
import APIViewServiceClient, { isUnexpected } from "@api-view/typescript-client";

// Create the client
const client = APIViewServiceClient("https://apiview.dev");

// Upload a file for auto review
async function uploadForReview() {
  const file = new File(['/* your code content */'], 'code.ts', { type: 'text/plain' });
  
  const result = await client.path("/AutoReview/UploadAutoReview").post({
    headers: {
      "api-key": "your-api-key-here",
    },
    contentType: "multipart/form-data",
    body: {
      file: file,
      label: "v1.0.0",
      packageVersion: "1.0.0"
    }
  });
  
  if (isUnexpected(result)) {
    throw new Error(`Upload failed: ${result.body.message}`);
  }
  
  console.log('Upload response:', result.body.content);
}

uploadForReview().catch(console.error);
```

## API Structure

The generated client provides:

- **REST Level Client (RLC)**: Low-level, path-based API
- **Type Safety**: Full TypeScript types for requests and responses
- **Multiple Module Formats**: ESM, CommonJS, Browser, React Native

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

- **Modern TypeScript**: Built with TypeScript 5.8+
- **Multi-Platform**: Works in Node.js, browsers, and React Native
- **Tree-Shakeable**: ES modules support for optimal bundle sizes
- **Type Safe**: Complete TypeScript definitions

## Building

```bash
npm run build
```

This will:
1. Clean previous builds
2. Build with `tshy` for multiple module formats
3. Extract API documentation
