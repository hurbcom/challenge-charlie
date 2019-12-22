FROM node:12.13.0-alpine3.10 AS builder

ARG NODE_ENV=
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx:1.17.6-alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]