FROM node:lts-slim AS development
ENV NODE_ENV development
RUN apt-get update && apt-get install -y inotify-tools
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start:dev" ]

FROM node:lts-slim AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:lts-slim AS production
ENV NODE_ENV production
COPY --from=builder /app .
EXPOSE 3000 80
CMD [ "npm", "run", "start:prod" ]