FROM ubuntu:20.04 AS developmentproxy
ENV NODE_ENV development
RUN apt-get update && apt-get install -y nginx
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log
RUN rm -rf /etc/nginx/sites-enabled/default
EXPOSE 80
COPY nginx.dev.conf /etc/nginx/sites-enabled/app
CMD ["nginx", "-g", "daemon off;"]

FROM node:lts-alpine3.16 AS development
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
EXPOSE 3000
CMD [ "yarn", "start" ]

FROM node:lts-alpine3.16 AS builder
ENV NODE_ENV production
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --production
COPY . .
RUN yarn build

FROM nginx:stable-alpine AS production
ENV NODE_ENV production
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
