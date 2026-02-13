# Project Guidelines

## Project Overview

This project is a Vite testing repository containing two independent Vite development servers designed for testing multi-service frontend deployments. Each service serves a simple "Hello" page that displays its port number for identification.

## Technology Stack

- **Runtime**: Node.js
- **Build Tool**: Vite 5.4.0
- **Package Manager**: npm with workspaces
- **Concurrency**: concurrently (for running multiple services)

## Project Structure

```
/
├── package.json          # Root package with workspaces config
├── service-1/            # First Vite service (port 8080)
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── main.js
└── service-2/            # Second Vite service (port 8093)
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── main.js
```

## Application Services

### Service 1 (Port 8080)
- Simple Vite dev server
- Renders a "Hello from Service 1" page
- URL: `http://localhost:8080`

### Service 2 (Port 8093)
- Simple Vite dev server
- Renders a "Hello from Service 2" page
- URL: `http://localhost:8093`
- Has additional Vite config for `allowedHosts` and `hosts`

## Dependencies Between Services

- No dependencies between services; they run independently
- Both services can run concurrently or individually

## Build & Run Instructions

### Install Dependencies
```bash
npm install
```

### Run Both Services
```bash
npm run dev
```

### Run Individual Services
```bash
npm run dev:8080   # Service 1 on port 8080
npm run dev:8093   # Service 2 on port 8093
```

## Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Root workspace configuration with dev scripts |
| `service-1/package.json` | Service 1 dependencies and scripts |
| `service-2/package.json` | Service 2 dependencies and scripts |
| `service-1/vite.config.js` | Vite configuration for Service 1 (port 8080) |
| `service-2/vite.config.js` | Vite configuration for Service 2 (port 8093, with allowedHosts) |

## Important Environment Variables

No custom environment variables are required. Ports are hardcoded in configurations.

## Key Patterns & Style Guide

### HTML Structure
- Minimal HTML5 boilerplate with app root div
- Module type scripts for ES module support

### JavaScript Pattern
- Direct DOM manipulation via `innerHTML`
- Inline styling with system-ui font family
- Template literals for HTML generation

### Styling Pattern
- Inline styles preferred in this simple setup
- Centered layout with max-width constraints
- System UI font stack

## Preview Configuration Notes

- For Matter preview, Service 2 (port 8093) is recommended as the preview target since it has `allowedHosts: true` configured
- Vite servers need `host: '0.0.0.0'` or `host: true` to accept external connections
- The `allowedHosts` configuration allows access from non-localhost domains