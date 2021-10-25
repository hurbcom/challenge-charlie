FROM node:alpine as build-step

RUN apk add git

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install -j4 --retry 3

ENV NEXT_PUBLIC_APi_URL_IMAGE "http://bing.com/"

COPY . .

EXPOSE 3000

CMD yarn build && yarn start
