FROM node:18.14.2-alpine

WORKDIR ./challenge-charlie

COPY  ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD npm run dev
