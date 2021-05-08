# build stage
FROM node:14-alpine
WORKDIR /app
COPY . /app
COPY package*.json ./
RUN npm install
RUN npm rebuild node-sass
RUN npm run build
EXPOSE 3000
EXPOSE 80
CMD ["npm","run","serve"]