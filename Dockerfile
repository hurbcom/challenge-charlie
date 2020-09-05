FROM node:14.9.0-alpine as build
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build:dev

FROM nginx:1.19.2-alpine
WORKDIR /usr/share/nginx/html/
COPY --from=build /app/dist ./