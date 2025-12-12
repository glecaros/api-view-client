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

#### Generate OpenAPI Specification

To generate the OpenAPI 3.0 specification from TypeSpec:

```bash
yarn generate
```

This will create the OpenAPI specification in `typespec/tsp-output/@typespec/openapi3/openapi.yaml`.

#### Generate TypeScript Client

To generate a TypeScript client library:

```bash
yarn generate:typescript
```

This will:
1. Generate the OpenAPI specification
2. Use OpenAPI Generator to create a TypeScript client in `packages/typescript-client/`

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

The TypeScript client is generated using OpenAPI Generator with the `typescript-fetch` generator.

Features:
- ES6+ support
- Promise-based API
- Type-safe interfaces
- Fetch API backend

## Development

### Adding New Operations

1. Edit `typespec/main.tsp` to add new models, operations, or interfaces
2. Run `yarn generate` to regenerate the OpenAPI specification
3. Run `yarn generate:typescript` (or other language-specific scripts) to regenerate clients
4. Test the generated clients

### Adding Support for More Languages

To add support for additional languages:

1. Add a new script in `typespec/package.json` (e.g., `generate:python`)
2. Use OpenAPI Generator with the appropriate generator (e.g., `python`)
3. Output to `packages/<language>-client/`
4. Update this README with usage instructions

## Contributing

When contributing to this repository:

1. Do not manually edit files in `packages/` - they are generated
2. Make changes to `typespec/main.tsp` instead
3. Regenerate clients after making changes
4. Ensure all generated clients build successfully

## License

MIT
