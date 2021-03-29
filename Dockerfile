FROM node:14-alpine

ARG PROJECT_DIR=/challenge-charlie

RUN mkdir $PROJECT_DIR

WORKDIR $PROJECT_DIR

COPY package.json $PROJECT_DIR

RUN npm install

COPY . $PROJECT_DIR

RUN npm run build