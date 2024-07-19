FROM node:18.20.4-slim

WORKDIR /usr/src/weather-server

RUN chown -Rh node:node /usr/src/weather-server

RUN rm -rf node_modules
RUN rm -rf package-lock.json

COPY package*.json ./

RUN apt update && \
    apt install -y ca-certificates wget npm curl && \
    update-ca-certificates && \
    npm install -g dotenv-cli

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD ["sh", "-c", "npm install && npm run dev"]
