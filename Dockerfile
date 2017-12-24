FROM node:boron

RUN mkdir -p /charlie
WORKDIR /charlie

COPY . /charlie
RUN npm install
RUN npm run build

EXPOSE 8080
CMD npm run server
