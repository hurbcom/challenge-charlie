FROM node:14-alpine

ARG PROJECT_DIR=/challenge-charlie
ARG PROXY_DIR=${PROJECT_DIR}/proxy

RUN mkdir $PROJECT_DIR

WORKDIR $PROJECT_DIR
COPY package.json $PROJECT_DIR
RUN npm install
COPY . $PROJECT_DIR

WORKDIR $PROXY_DIR
RUN npm install

WORKDIR $PROJECT_DIR

CMD ["npm", "start"]