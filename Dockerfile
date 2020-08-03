FROM node:14.7.0-alpine3.10 AS development

RUN mkdir -p /hurb-challenge-charlie
WORKDIR /hurb-challenge-charlie
COPY . .

RUN npm install

CMD ["npm", "start"]

FROM DEVELOPMENT AS production

RUN npm run build
