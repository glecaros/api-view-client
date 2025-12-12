# Contributing to API View Clients

Thank you for your interest in contributing to the API View Clients repository! This repository contains client libraries generated from TypeSpec specifications for TypeScript and C#.

## Development Environment Setup

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) installed on your machine
- [Visual Studio Code](https://code.visualstudio.com/) with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Getting Started with Dev Containers

This repository is configured with a development container that includes all the necessary tools and dependencies for TypeScript and C# development.

#### Opening the Dev Container

1. Clone the repository:
   ```bash
   git clone https://github.com/glecaros/api-view-client.git
   cd api-view-client
   ```

2. Open the repository in Visual Studio Code:
   ```bash
   code .
   ```

3. When prompted, click "Reopen in Container" or use the Command Palette (F1) and select "Dev Containers: Reopen in Container"

4. Wait for the container to build and start. This may take a few minutes on the first run.

#### What's Included

The dev container includes:

- **Node.js 22** - For TypeScript development and TypeSpec tooling
- **.NET 8.0 SDK** - For C# development
- **TypeSpec Compiler** - Installed globally for spec development
- **Git & GitHub CLI** - For version control and GitHub interactions
- **VS Code Extensions**:
  - C# Dev Kit and language support
  - ESLint for TypeScript linting
  - Prettier for code formatting
  - TypeSpec VS Code extension

## Development Workflow

### TypeScript Development

1. Navigate to your TypeScript project directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Run tests:
   ```bash
   npm test
   ```

### C# Development

1. Navigate to your C# project directory
2. Restore dependencies:
   ```bash
   dotnet restore
   ```
3. Build the project:
   ```bash
   dotnet build
   ```
4. Run tests:
   ```bash
   dotnet test
   ```

### Working with TypeSpec

TypeSpec is used to define API specifications that generate client libraries.

1. Create or edit `.tsp` files in your specification directory
2. Compile TypeSpec:
   ```bash
   tsp compile <path-to-spec>
   ```
3. Generate client libraries for target languages using the appropriate emitters

## Code Quality Standards

### TypeScript

- Follow the project's ESLint configuration
- Use Prettier for code formatting (configured to run on save)
- Write tests for new functionality
- Ensure all tests pass before submitting a PR

### C#

- Follow Microsoft's C# coding conventions
- Use meaningful variable and method names
- Write XML documentation comments for public APIs
- Write unit tests for new functionality
- Ensure all tests pass before submitting a PR

## Submitting Changes

1. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them with clear, descriptive commit messages:
   ```bash
   git add .
   git commit -m "Add feature: description of your changes"
   ```

3. Push your branch to GitHub:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Open a Pull Request on GitHub with a clear description of your changes

## Getting Help

If you encounter any issues or have questions:

- Check existing [GitHub Issues](https://github.com/glecaros/api-view-client/issues)
- Open a new issue with a detailed description of your problem
- Reach out to the maintainers

## Code of Conduct

Please be respectful and constructive in all interactions. We aim to foster a welcoming and inclusive community.

## License

By contributing to this repository, you agree that your contributions will be licensed under the same license as the project.
