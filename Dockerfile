FROM node:boron

RUN mkdir -p /charlie
WORKDIR /charlie

COPY . /charlie
RUN npm install

EXPOSE 8080
CMD ["npm", "start"]
