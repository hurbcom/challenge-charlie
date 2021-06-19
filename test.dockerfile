# Base Stage
FROM node:lts-alpine as base-stage
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
