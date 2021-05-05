FROM node:alpine

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY . /usr/src

RUN yarn

RUN yarn build

EXPOSE 3000

CMD yarn start