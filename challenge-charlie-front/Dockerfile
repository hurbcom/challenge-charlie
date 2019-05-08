FROM node:10.9.0 as node
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/
ARG env=prod
RUN npm run build

FROM nginx:1.16
COPY --from=node /usr/src/app/dist/challenge-charlie-front /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf