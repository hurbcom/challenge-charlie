#Imagem base
FROM node:10

#Diretório de trabalho
RUN mkdir /usr/app
WORKDIR /usr/app

ENV PATH /usr/app/node_modules/.bin:$PATH

COPY package.json /usr/app/package.json
RUN npm install --silent

CMD [ "npm", "start" ]