FROM node:latest

LABEL maintainer="jessicaalonsodcl@gmail.com"

WORKDIR /usr/src/app

VOLUME [ "/usr/src/app" ]

EXPOSE 3000

CMD [ "npm", "start" ] 