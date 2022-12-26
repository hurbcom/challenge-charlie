FROM node:18-alpine

WORKDIR /app

COPY . ./

RUN npm install

CMD ["npx", "nx", "serve", "frontend-mfes-currency-exchange"]