# React and Express Monorepo with pnpm

This repository demonstrates how to build and manage a **React 19 frontend** and an **Express.js backend** within a **monorepo** using [pnpm workspaces](https://pnpm.io/workspaces). The goal is to streamline the development process, allowing both applications to work together while maintaining separate environments and configurations, with the latest React features and automatic optimizations.

## Features

- **Monorepo Setup:** Both frontend (React) and backend (Express.js) applications are contained in a single repository, with separate environments and `package.json` files.
- **React 19:** Latest version of React with new features and optimizations.
- **React Compiler:** Enabled by default for automatic performance optimizations.
- **Vite Proxy:** Seamlessly proxy API requests from the frontend to the backend for local development.
- **rolldown-vite:** Uses the faster Rolldown-based Vite for improved build performance.
- **pnpm Workspaces:** Simplifies dependency management and running commands across packages with workspace filtering and parallel execution.
- **Shared Environment Variables:** Uses [dotenvx](https://www.npmjs.com/package/dotenvx) to manage environment variables across both applications.
- **Production-Ready Setup:** Serves static files from the backend and handles fallback routes for **client-side routing**.

## Folder Structure

```bash
/apps
  /react      # Frontend React application
  /express    # Backend Express.js application
/packages
  /shared     # Shared code or utilities (if any)
```

## Setup and Installation

### 1. Clone the repository:

```bash
git clone https://github.com/probir-sarkar/react-express-monorepo
cd react-express-monorepo
```

### 2. Install dependencies using PNPM:

```bash
pnpm install
```

### 3. Set up environment variables:

Create a `.env` file in the root directory to manage global variables across the monorepo.

### 4. Start development servers:

```bash
pnpm dev
```

This will start both the frontend (Vite on port `5173`) and backend (Express on port `3000`) in parallel.

For individual development:

```bash
# Start only the React frontend
pnpm dev:react

# Start only the Express backend
pnpm dev:express
```

### 5. Build for production:

```bash
pnpm build
```

### 6. Start the production server:

```bash
pnpm start
```

## Tech Stack

### Frontend
- **React 19** - Latest React with new features and optimizations
- **TypeScript** - Type-safe JavaScript
- **Vite (rolldown-vite)** - Fast build tool and development server
- **React Compiler** - Automatic performance optimizations
- **ESLint** - Code linting and formatting

### Backend
- **Express 5** - Fast, unopinionated web framework
- **TypeScript** - Type-safe JavaScript
- **tsx** - TypeScript execution engine
- **tsup** - TypeScript bundler

### Development Tools
- **pnpm** - Fast, disk space efficient package manager
- **dotenvx** - Environment variable management

## React Compiler

This project includes the React Compiler, which automatically optimizes your React components by:

- **Memoization**: Automatically memoizes components, hooks, and calculations
- **Fine-grained reactivity**: Only re-renders what actually changed
- **Automatic optimizations**: No manual useMemo or useCallback needed in most cases

The compiler is enabled in `vite.config.ts` and works transparently during development and production builds.

## Development Server Setup

- The **frontend** runs on [localhost:5173](http://localhost:5173) (powered by Vite with rolldown).
- The **backend** runs on [localhost:3000](http://localhost:3000) (powered by Express.js).
- All API requests to `/api` are proxied from the frontend to the backend.

## Production Setup

In production, the backend serves the frontend's static files and handles unmatched routes for **client-side routing**.

```js
// Serve static files from the React frontend
app.use(express.static(path.join(__dirname, "../../react/dist")));

// Fallback for React Router (unmatched routes)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../react/dist/index.html"));
});
```

## Learn More

For more information on this setup and best practices, please refer to [the blog post here](#).
