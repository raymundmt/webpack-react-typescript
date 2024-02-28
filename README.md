# React TypeScript Webpack Starter

This project is a simple starter template for building React applications using TypeScript and Webpack. It includes the basic setup needed to get started with development and production builds.

This template is created from:

https://medium.com/javascript-journal-unlocking-project-potential/building-a-typescript-react-project-from-scratch-with-webpack-b224a3f84e3b


## Prerequisites

Before you begin, ensure you have installed the latest version of [Node.js](https://nodejs.org/). This project uses `pnpm` for dependency management, make sure it's installed globally on your machine. If you haven't installed `pnpm`, run:

```bash
npm install -g pnpm
```

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/raymundmt/webpack-react-typescript
```

2. Navigate to the project directory:

```bash
cd webpack-react-typescript
```

3. Install dependencies with `pnpm`:

```bash
pnpm install
```

### Development

To start the development server:

```bash
pnpm start
```

This command will bundle your application and automatically open it in your default web browser at `http://localhost:9000`.

### Building

To build the application for production:

```bash
pnpm build
```

This will generate a `dist` directory in your project root, containing the production build of your application.

## Features

- React 18+
- TypeScript support
- Webpack configuration for development and production
- Babel for transpilation
- Hot Module Replacement (HMR) for smoother development experience

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.