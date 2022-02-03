FROM node:14.15
WORKDIR /app
COPY package.json /app/package.json
RUN npm install

CMD ["npm", "start"]