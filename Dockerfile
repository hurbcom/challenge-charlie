FROM node:16-alpine

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile

RUN yarn build

ENV NODE_ENV production

EXPOSE 3000

CMD [ "yarn", "serve", "dist"]

