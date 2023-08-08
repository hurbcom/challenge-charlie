FROM node:17-alpine

RUN npm install -g nodemon

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm","run", "dev" ]