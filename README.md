# Vite testing repository

Two Vite dev servers for testing:

| Service   | Port | URL                    |
|----------|------|------------------------|
| Service 1 | 8080 | http://localhost:8080  |
| Service 2 | 8093 | http://localhost:8093  |

## Setup

```bash
npm install
```

## Run

**Both services:**
```bash
npm run dev
```

**Single service:**
```bash
npm run dev:8080   # Service 1 on port 8080
npm run dev:8093   # Service 2 on port 8093
```

Each Hello page shows its port (8080 or 8093) so you can tell which service you’re on.
