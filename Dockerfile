FROM node:12.13.0-alpine3.10

ARG NODE_ENV=
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY ./ ./