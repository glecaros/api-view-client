# Adding New Language Clients

This guide explains how to add support for generating client libraries in additional programming languages using TypeSpec emitters.

## Overview

The client generation process uses TypeSpec emitters to generate clients directly from the TypeSpec definition, without intermediate OpenAPI files.

## Available TypeSpec Emitters

- `@azure-tools/typespec-ts` - TypeScript (RLC)
- `@typespec/http-client-python` - Python
- `@azure-tools/typespec-go` - Go
- `@azure-tools/typespec-java` - Java
- `@azure-tools/typespec-csharp` - C#
- `@azure-tools/typespec-rust` - Rust

## Steps to Add a New Language

### 1. Install the Emitter

Add the emitter package to `typespec/package.json`:

```bash
cd typespec
yarn add @typespec/http-client-python
```

### 2. Configure the Emitter

Edit `typespec/tspconfig.yaml` to add the emitter:

```yaml
emit:
  - "@azure-tools/typespec-ts"
  - "@typespec/http-client-python"
options:
  "@azure-tools/typespec-ts":
    packageDetails:
      name: "@api-view/typescript-client"
      version: "1.0.0"
    emitterOutputDir: "{project-root}/../packages/typescript-client"
  "@typespec/http-client-python":
    package-name: "apiview-client"
    package-version: "1.0.0"
    emitterOutputDir: "{project-root}/../packages/python-client"
```

### 3. Add Generation Script (Optional)

For convenience, add a script in `typespec/package.json`:

```json
{
  "scripts": {
    "generate:python": "tsp compile . --emit @typespec/http-client-python"
  }
}
```

### 4. Generate the Client

```bash
yarn workspace @api-view/typespec generate:python
# or
cd typespec && tsp compile . --emit @typespec/http-client-python
```

### 5. Test the Generated Client

Navigate to the generated package and test according to the language:

```bash
cd packages/python-client
# Follow language-specific setup/build instructions
```

### 6. Update Documentation

Add usage instructions to the main README.md.

## Emitter Configuration Examples

### TypeScript

```yaml
"@azure-tools/typespec-ts":
  packageDetails:
    name: "@api-view/typescript-client"
    version: "1.0.0"
  generateMetadata: true
  generateTest: false
  emitterOutputDir: "{project-root}/../packages/typescript-client"
```

### Python

```yaml
"@typespec/http-client-python":
  package-name: "apiview-client"
  package-version: "1.0.0"
  emitterOutputDir: "{project-root}/../packages/python-client"
```

### Go

```yaml
"@azure-tools/typespec-go":
  module: "github.com/yourorg/apiview-client"
  packageDir: "{project-root}/../packages/go-client"
```

## Best Practices

1. **Output Directory**: Generate to `packages/<language>-client/`
2. **Package Naming**: Use consistent naming conventions
3. **Documentation**: Create usage examples for each client
4. **Version**: Keep all clients at the same version as the TypeSpec
5. **Testing**: Verify generated clients build and work correctly

## Example: Adding Python Client

1. Install the emitter:
```bash
cd typespec
yarn add @typespec/http-client-python
```

2. Update `typespec/tspconfig.yaml`:
```yaml
emit:
  - "@azure-tools/typespec-ts"
  - "@typespec/http-client-python"
options:
  "@typespec/http-client-python":
    package-name: "apiview-client"
    package-version: "1.0.0"
    emitterOutputDir: "{project-root}/../packages/python-client"
```

3. Generate:
```bash
tsp compile . --emit @typespec/http-client-python
```

4. Test:
```bash
cd ../packages/python-client
pip install -e .
python -c "import apiview_client; print(apiview_client)"
```

## Troubleshooting

### Emitter Not Found
- Ensure the emitter is installed: `yarn add <emitter-package>`
- Check that it's listed in `typespec/package.json` dependencies

### Compilation Errors
- Verify TypeSpec compilation: `tsp compile .`
- Check the emitter documentation for required TypeSpec features

### Build Failures
- Review language-specific requirements
- Check emitter documentation for configuration options

## Resources

- [TypeSpec Documentation](https://typespec.io/)
- [Azure TypeSpec Emitters](https://github.com/Azure/autorest.typescript/tree/main/packages)
- [TypeSpec HTTP Client Python](https://github.com/microsoft/typespec/tree/main/packages/http-client-python)
