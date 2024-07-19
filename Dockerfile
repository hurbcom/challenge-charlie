FROM node:18.20.4-slim

WORKDIR /usr/src/weather-client

RUN rm -rf node_modules
RUN rm -rf package-lock.json

COPY package*.json ./

RUN apt update && \
    apt install -y npm && \
    npm install -g dotenv-cli

RUN npm install

COPY . .

EXPOSE 8080

CMD ["sh", "-c", "npm install && npm run dev"]
