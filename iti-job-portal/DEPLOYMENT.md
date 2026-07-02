# Deployment Guide

## Server
1. Copy `server/.env.example` to `server/.env`.
2. Set MongoDB URI and JWT secret.
3. Install dependencies:
   npm install
4. Start in production:
   npm run start

## Client
1. Copy `client/.env.example` to `client/.env`.
2. Set `VITE_API_URL`.
3. Install dependencies:
   npm install
4. Build:
   npm run build

## PM2
Install PM2 globally:
npm install -g pm2

Start server:
pm2 start ecosystem.config.js

Save PM2 process list:
pm2 save

Set startup:
pm2 startup
