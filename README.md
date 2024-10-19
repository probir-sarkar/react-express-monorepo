# React and Express Monorepo with Turborepo

This repository demonstrates how to build and manage a **React frontend** and an **Express.js backend** within a **monorepo** using [Turborepo](https://turbo.build/). The goal is to streamline the development process, allowing both applications to work together while maintaining separate environments and configurations.

## Features

- **Monorepo Setup:** Both frontend (React) and backend (Express.js) applications are contained in a single repository, with separate environments and `package.json` files.
- **Vite Proxy:** Seamlessly proxy API requests from the frontend to the backend for local development.
- **Turborepo:** Simplifies the management of builds, linting, and running development servers for both applications with a single command.
- **Shared Environment Variables:** Uses [dotenvx](https://www.npmjs.com/package/dotenvx) to manage environment variables across both applications.
- **Production-Ready Setup:** Serves static files from the backend and handles fallback routes for **React Router**.

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

This will start both the frontend (Vite on port `5173`) and backend (Express on port `3000`).

### 5. Build for production:

```bash
pnpm build
```

### 6. Start the production server:

```bash
pnpm start
```

## Development Server Setup

- The **frontend** runs on [localhost:5173](http://localhost:5173) (powered by Vite).
- The **backend** runs on [localhost:3000](http://localhost:3000) (powered by Express.js).
- All API requests to `/api` are proxied from the frontend to the backend.

## Production Setup

In production, the backend serves the frontend's static files and handles unmatched routes for **React's client-side routing**.

```js
// Serve static files from the React frontend
app.use(express.static(path.join(__dirname, "../../react/dist")));

// Fallback for React Router (unmatched routes)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../react/dist/index.html"));
});
```

## Learn More

For more information on this setup and best practices, please refer to [the blog post here](#).
