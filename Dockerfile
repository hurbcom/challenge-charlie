# build stage
FROM node:10.15.2-alpine
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build
EXPOSE 8080
CMD ["npm","run","server"]