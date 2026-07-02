# Docker Setup

## Build and run
docker compose up --build

## Services
- Client: http://localhost
- Server: http://localhost:5000
- MongoDB: localhost:27017

## Notes
- Update `server/.env` before starting.
- Update `client/.env` if your API is not on the same host.
- The Nginx config supports SPA routing.
