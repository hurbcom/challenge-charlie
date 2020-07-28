FROM node

RUN mkdir -p /hurb-challenge-charlie
WORKDIR /hurb-challenge-charlie
COPY . .

RUN npm install

CMD ["npm", "start"]
