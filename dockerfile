FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY package*.json ./

RUN yarn

ADD . /app

EXPOSE 3000

CMD ["yarn", "start"]
