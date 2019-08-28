FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY package*.json ./

RUN yarn

COPY . /app

CMD ["yarn", "start"]
