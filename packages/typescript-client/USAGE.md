# Example: Using the TypeScript Client

## Installation

First, build the client from the repository root:

```bash
yarn install
yarn generate:typescript
yarn build
```

## Basic Usage

```typescript
import { Configuration, DefaultApi } from '@api-view/typescript-client';

// Configure the API client
const config = new Configuration({
  basePath: 'https://apiview.dev',
});

const api = new DefaultApi(config);

// Upload a file for auto review
async function uploadForReview() {
  const file = new Blob(['/* your code content */'], { type: 'text/plain' });
  
  try {
    const response = await api.autoReviewUploadAutoReview({
      apiKey: 'your-api-key-here',
      uploadFormData: {
        file: file,
        label: 'v1.0.0',
        packageVersion: '1.0.0'
      }
    });
    
    console.log('Upload response:', response.content);
  } catch (error) {
    console.error('Upload failed:', error);
  }
}

uploadForReview();
```

## API Reference

### `autoReviewUploadAutoReview(request)`

Upload a source artifact for automatic review.

**Parameters:**
- `apiKey` (string): API Key for authentication
- `uploadFormData` (UploadFormData): Form data containing file and metadata
  - `file` (Blob): The file to upload as binary data
  - `label` (string): The API version label
  - `packageVersion` (string): The package version

**Returns:**
- Promise<UploadResponse>: Contains the response content from the upload operation

**Throws:**
- ErrorResponse: When the upload fails
