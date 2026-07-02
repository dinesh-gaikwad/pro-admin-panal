#!/usr/bin/env bash
set -e

ROOT="iti-job-portal"

echo "=== Fixing server/package.json ==="
cat > "$ROOT/server/package.json" <<'EOF'
{
  "name": "iti-job-portal-server",
  "version": "1.0.0",
  "main": "src/server.js",
  "type": "commonjs",
  "scripts": {
    "dev": "node src/server.js",
    "start": "node src/server.js",
    "seed": "node scripts/seed.js"
  },
  "dependencies": {},
  "devDependencies": {}
}
EOF

echo "=== Fixing client/package.json ==="
cat > "$ROOT/client/package.json" <<'EOF'
{
  "name": "iti-job-portal-client",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {},
  "devDependencies": {}
}
EOF

echo "=== Fixing server/src/config/env.js ==="
mkdir -p "$ROOT/server/src/config"
cat > "$ROOT/server/src/config/env.js" <<'EOF'
require('dotenv').config();

const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/iti-job-portal',
  jwtSecret: process.env.JWT_SECRET || 'dev_secret_change_me',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
};

module.exports = env;
EOF

echo "=== Fixing server/src/config/database.js ==="
cat > "$ROOT/server/src/config/database.js" <<'EOF'
const mongoose = require('mongoose');
const env = require('./env');

const connectDB = async () => {
  try {
    await mongoose.connect(env.mongoUri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
EOF

echo "=== Fixing server/Dockerfile ==="
cat > "$ROOT/server/Dockerfile" <<'EOF'
FROM node:20-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
EOF

echo "=== Fixing client/Dockerfile ==="
cat > "$ROOT/client/Dockerfile" <<'EOF'
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
EOF

echo "=== Fixing client/nginx.conf ==="
cat > "$ROOT/client/nginx.conf" <<'EOF'
server {
  listen 80;
  server_name _;
  root /usr/share/nginx/html;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
EOF

echo "=== Fixing docker-compose.yml ==="
cat > "$ROOT/docker-compose.yml" <<'EOF'
services:
  mongo:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db
    restart: unless-stopped

  server:
    build:
      context: ./server
    ports:
      - "5000:5000"
    env_file:
      - ./server/.env
    environment:
      MONGO_URI: mongodb://mongo:27017/iti-job-portal
      NODE_ENV: production
    depends_on:
      - mongo
    restart: unless-stopped

  client:
    build:
      context: ./client
    ports:
      - "80:80"
    depends_on:
      - server
    restart: unless-stopped

volumes:
  mongo_data:
EOF

echo "=== Done ==="
echo "Run these commands next:"
echo "1) cd $ROOT"
echo "2) docker compose down -v"
echo "3) docker compose up --build"