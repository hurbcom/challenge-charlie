FROM node:latest as node

COPY . /hurb-weather

WORKDIR /hurb-weather

RUN npm install

RUN npm run build
 

FROM nginx:alpine

COPY --from=node /hurb-weather/dist/hurb-weather /usr/share/nginx/html