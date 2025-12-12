# Adding New Language Clients

This guide explains how to add support for generating client libraries in additional programming languages.

## Overview

The client generation process uses:
1. **TypeSpec** - Define the API specification
2. **OpenAPI Generator** - Generate clients from the OpenAPI spec

## Steps to Add a New Language

### 1. Choose a Generator

Browse available generators at: https://openapi-generator.tech/docs/generators

Common generators:
- `python` - Python client
- `java` - Java client  
- `csharp` - C# client
- `go` - Go client
- `ruby` - Ruby client
- `php` - PHP client

### 2. Add Generation Script

Edit `typespec/package.json` and add a new script:

```json
{
  "scripts": {
    "generate:python": "tsp compile . --emit @typespec/openapi3 && openapi-generator-cli generate -i tsp-output/@typespec/openapi3/openapi.yaml -g python -o ../packages/python-client --additional-properties=packageName=apiview_client,projectName=apiview-client,packageVersion=1.0.0"
  }
}
```

### 3. Add Root Script (Optional)

For convenience, add a script in the root `package.json`:

```json
{
  "scripts": {
    "generate:python": "yarn workspace @api-view/typespec generate:python"
  }
}
```

### 4. Generate the Client

```bash
yarn generate:python
```

### 5. Test the Generated Client

Navigate to the generated package and test according to the language:

```bash
cd packages/python-client
# Follow language-specific setup/build instructions
```

### 6. Update Documentation

Add usage instructions to the main README.md and create a USAGE.md in the generated package directory.

## Common Generator Options

### TypeScript/JavaScript
```bash
-g typescript-fetch \
--additional-properties=npmName=@api-view/typescript-client,supportsES6=true,npmVersion=1.0.0
```

### Python
```bash
-g python \
--additional-properties=packageName=apiview_client,projectName=apiview-client,packageVersion=1.0.0
```

### Java
```bash
-g java \
--additional-properties=groupId=dev.apiview,artifactId=apiview-client,apiPackage=dev.apiview.api,modelPackage=dev.apiview.model
```

### C#
```bash
-g csharp \
--additional-properties=packageName=APIView.Client,targetFramework=net6.0
```

### Go
```bash
-g go \
--additional-properties=packageName=apiview,packageVersion=1.0.0
```

## Best Practices

1. **Output Directory**: Generate to `packages/<language>-client/`
2. **Package Naming**: Use consistent naming like `@api-view/<language>-client`
3. **Documentation**: Create USAGE.md for each client with examples
4. **Version**: Keep all clients at the same version as the TypeSpec
5. **Testing**: Add build/test scripts to verify generated clients

## Example: Adding Python Client

1. Add to `typespec/package.json`:
```json
"generate:python": "tsp compile . --emit @typespec/openapi3 && openapi-generator-cli generate -i tsp-output/@typespec/openapi3/openapi.yaml -g python -o ../packages/python-client --additional-properties=packageName=apiview_client,projectName=apiview-client,packageVersion=1.0.0"
```

2. Generate:
```bash
yarn workspace @api-view/typespec generate:python
```

3. Test:
```bash
cd packages/python-client
pip install -e .
python -c "import apiview_client; print(apiview_client)"
```

4. Document in `packages/python-client/USAGE.md`

## Troubleshooting

### Generator Not Found
- Ensure OpenAPI Generator CLI is installed: `yarn workspace @api-view/typespec add @openapitools/openapi-generator-cli`

### Invalid OpenAPI Spec
- Verify TypeSpec compilation: `yarn generate`
- Check the generated file: `typespec/tsp-output/@typespec/openapi3/openapi.yaml`

### Build Failures
- Check language-specific requirements
- Review generator documentation: https://openapi-generator.tech/docs/generators/

## Resources

- [OpenAPI Generator Generators](https://openapi-generator.tech/docs/generators)
- [TypeSpec Documentation](https://typespec.io/)
- [OpenAPI 3.0 Specification](https://swagger.io/specification/)
