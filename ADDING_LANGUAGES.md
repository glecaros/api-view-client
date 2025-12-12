# Adding New Language Clients

This guide explains how to add support for generating client libraries in additional programming languages using TypeSpec emitters.

## Overview

The client generation process uses TypeSpec emitters to generate clients directly from the TypeSpec definition, without intermediate OpenAPI files.

## Available TypeSpec Emitters

- `@typespec/http-client-js` - TypeScript/JavaScript
- `@typespec/http-client-python` - Python  
- `@typespec/http-client-csharp` - C#
- `@typespec/http-client-java` - Java

## Steps to Add a New Language

### 1. Install the Emitter

Add the emitter package to `typespec/package.json`:

```bash
cd typespec
yarn add @typespec/http-client-python
```

### 2. Configure the Emitter

Edit `typespec/tspconfig.yaml` to add the emitter to the emit array and configure options:

```yaml
emit:
  - "@typespec/http-client-js"
  - "@typespec/http-client-python"

options:
  "@typespec/http-client-js":
    packageDetails:
      name: "@api-view/typescript-client"
      version: "1.0.0"
  "@typespec/http-client-python":
    packageDetails:
      name: "apiview-client"
      version: "1.0.0"
```

### 3. Add Generation Script (Optional)

For convenience, add a script in `typespec/package.json`:

```json
{
  "scripts": {
    "generate:python": "tsp compile . --emit @typespec/http-client-python && mkdir -p ../packages && rm -rf ../packages/python-client && mv tsp-output/@typespec/http-client-python ../packages/python-client"
  }
}
```

### 4. Generate the Client

```bash
yarn workspace @api-view/typespec generate:python
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

All emitter options should be placed in the `tspconfig.yaml` file under the `options` section.

### TypeScript/JavaScript

```yaml
options:
  "@typespec/http-client-js":
    packageDetails:
      name: "@api-view/typescript-client"
      version: "1.0.0"
```

### Python

```yaml
options:
  "@typespec/http-client-python":
    packageDetails:
      name: "apiview-client"
      version: "1.0.0"
```

### C#

```yaml
options:
  "@typespec/http-client-csharp":
    packageDetails:
      name: "APIView.Client"
      version: "1.0.0"
```

### Java

```yaml
options:
  "@typespec/http-client-java":
    packageDetails:
      name: "com.apiview.client"
      version: "1.0.0"
```

## Best Practices

1. **Output Directory**: Generated code goes to `tsp-output/@typespec/<emitter-name>/`, then move to `packages/<language>-client/`
2. **Package Naming**: Use consistent naming conventions
3. **Documentation**: Create usage examples for each client
4. **Version**: Keep all clients at the same version as the TypeSpec
5. **Testing**: Verify generated clients build and work correctly
6. **Configuration**: Put all emitter configuration in `tspconfig.yaml` under the `options` section

## Example: Adding Python Client

1. Install the emitter:
```bash
cd typespec
yarn add @typespec/http-client-python
```

2. Update `typespec/tspconfig.yaml`:
```yaml
emit:
  - "@typespec/http-client-js"
  - "@typespec/http-client-python"

options:
  "@typespec/http-client-js":
    packageDetails:
      name: "@api-view/typescript-client"
      version: "1.0.0"
  "@typespec/http-client-python":
    packageDetails:
      name: "apiview-client"
      version: "1.0.0"
```

3. Generate:
```bash
tsp compile .
```

4. Move output:
```bash
mkdir -p ../packages
mv tsp-output/@typespec/http-client-python ../packages/python-client
```

5. Test:
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
- [TypeSpec HTTP Client Emitters](https://github.com/microsoft/typespec)
- [TypeSpec Compiler Options](https://typespec.io/docs/handbook/configuration)
