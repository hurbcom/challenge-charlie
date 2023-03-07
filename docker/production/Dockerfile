FROM node:18.14.2 AS build-stage

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

ENV NODE_ENV development

EXPOSE 3000

ENV PATH /app/node_modules/.bin:$PATH

RUN npx jest --ci

CMD npm run build



FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY ../docker/production/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
