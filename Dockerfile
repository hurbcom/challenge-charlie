FROM node:14
MAINTAINER Gabriel Dissotti

WORKDIR /app

COPY . /app

RUN yarn

EXPOSE 3000

CMD ["yarn", "dev"]
