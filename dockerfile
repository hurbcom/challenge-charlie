FROM node:alpine

WORKDIR "/app"

COPY package.json .

RUN npm install
# htttp://youtube.com/watch?v=O3SvhpnSZWY&t=452s

COPY  . .
CMD ["npm", "start"]