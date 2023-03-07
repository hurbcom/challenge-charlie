FROM node:18.14.2

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV NODE_ENV development

EXPOSE 3000

CMD npm run dev

