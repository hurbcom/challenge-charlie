FROM node:alpine
WORKDIR '/hurb'

COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]