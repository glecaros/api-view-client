# API View Clients

This monorepo contains the TypeSpec definition for the APIView Service and generates client libraries for multiple languages.

## Repository Structure

```
.
├── typespec/              # TypeSpec API definition
│   ├── main.tsp          # Main TypeSpec file
│   ├── tspconfig.yaml    # TypeSpec configuration
│   └── package.json      # TypeSpec dependencies
├── packages/             # Generated client libraries
│   └── typescript-client/  # TypeScript client (generated)
└── package.json          # Root workspace configuration
```

## Prerequisites

- Node.js 18.x or later
- Yarn 4.x (configured via packageManager in package.json)

## Getting Started

### Install Dependencies

```bash
yarn install
```

This will install Yarn Berry (v4.x) automatically and install all workspace dependencies.

### Generate Client Libraries

#### Generate TypeScript Client

To generate a TypeScript client library directly from TypeSpec:

```bash
yarn generate:typescript
```

This uses the `@azure-tools/typespec-ts` emitter to generate a TypeScript client in `packages/typescript-client/`.

**Note:** There's currently a known issue with the TypeSpec emitter where `contentType: contentType` is generated instead of `contentType: "multipart/form-data"` in the operations file. After generation, you'll need to manually fix this in `packages/typescript-client/src/api/autoReview/operations.ts` before building.

### Build All Packages

```bash
yarn build
```

### Clean Generated Files

```bash
yarn clean
```

## TypeSpec Definition

The API specification is defined in `typespec/main.tsp` and includes:

- **AutoReview Interface**: Upload operations for automatic code review
- **UploadAutoReview Operation**: Multipart form upload with API key authentication

### Service Details

- **Base URL**: `https://apiview.dev`
- **Service Title**: APIView Service

## Generated Client Libraries

### TypeScript Client

Location: `packages/typescript-client/`

The TypeScript client is generated directly from TypeSpec using the `@azure-tools/typespec-ts` emitter.

Features:
- ES6+ support
- Promise-based API
- Type-safe interfaces
- REST Level Client (RLC) architecture

## Development

### Adding New Operations

1. Edit `typespec/main.tsp` to add new models, operations, or interfaces
2. Run `yarn generate:typescript` to regenerate the TypeScript client
3. Test the generated client

### Adding Support for More Languages

To add support for additional languages, use the appropriate TypeSpec emitter:

**Available TypeSpec Emitters:**
- `@azure-tools/typespec-ts` - TypeScript
- `@typespec/http-client-python` - Python
- `@azure-tools/typespec-go` - Go
- `@azure-tools/typespec-java` - Java (via Autorest)
- `@azure-tools/typespec-csharp` - C#

1. Add the emitter as a dependency in `typespec/package.json`
2. Add the emitter to `tspconfig.yaml` emit array
3. Configure output options for the emitter
4. Run `tsp compile` to generate the client
5. Update this README with usage instructions

## Contributing

When contributing to this repository:

1. Do not manually edit files in `packages/` - they are generated
2. Make changes to `typespec/main.tsp` instead
3. Regenerate clients after making changes
4. Ensure all generated clients build successfully

## License

MIT
