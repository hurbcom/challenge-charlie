FROM node:18.14.2

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

ENV NODE_ENV development

EXPOSE 3000

CMD npm run dev

