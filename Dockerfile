FROM node:16.14.2 AS development

ARG REACT_APP_LOCATION_APIKEY
ENV REACT_APP_LOCATION_APIKEY ${REACT_APP_LOCATION_APIKEY}

ARG REACT_APP_WEATHER_APIKEY
ENV REACT_APP_WEATHER_APIKEY ${REACT_APP_WEATHER_APIKEY}

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . ./

FROM development AS builder

RUN npm run build

FROM nginx:1.21.6 AS production

COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
