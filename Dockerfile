FROM node:boron

RUN mkdir -p /weatherspa
WORKDIR /weatherspa

COPY . /weatherspa
RUN npm install
RUN npm rebuild node-sass
RUN npm run build

EXPOSE 3000
CMD npm run server