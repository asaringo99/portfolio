FROM node:20.2.0-alpine3.16 AS base
WORKDIR /app

# dev
FROM base as dev
WORKDIR /app
# ENV NODE_ENV=development