FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

RUN yarn global add serve

EXPOSE 5000

CMD ["serve", "-s", "build"]
