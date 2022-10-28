FROM node:16.14.2-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .

EXPOSE 5173

CMD ["yarn", "vite", "--host"]