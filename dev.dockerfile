FROM node:lts-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn global add @vue/cli
EXPOSE 8080