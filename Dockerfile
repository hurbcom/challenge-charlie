FROM node:14-alpine as build

ENV HOME=/home/app
WORKDIR $HOME

COPY package.json ./
RUN yarn install

COPY . /home/app
RUN yarn build

# production environment
FROM nginx:1.16.0-alpine

COPY --from=build --chown=nginx:nginx /home/app/build /usr/share/nginx/html