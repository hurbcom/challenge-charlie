FROM node:16.14.2 AS development

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . ./

FROM development AS builder

RUN npm run build

FROM nginx:1.21.6 AS production

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
