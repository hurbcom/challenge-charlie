FROM node:14.15.1

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

ARG NODE_VERSION=14.15.1
ARG NVM_DIR=/usr/local/.nvm
ARG SERICE=ms-prediction

RUN apt-get -y update --fix-missing
RUN apt-get -y install curl

RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

RUN ["chmod", "+x", "usr/local/.nvm/nvm.sh"]

COPY . /usr/$SERVICE
WORKDIR /usr/$SERVICE

RUN npm update \
    && npm install

CMD ["npm", "run", "dev"]