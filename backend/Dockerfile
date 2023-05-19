FROM node:lts-alpine as builder
RUN mkdir -p /app
WORKDIR /app
COPY package.json .
COPY pm2.json .
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM keymetrics/pm2:18-alpine
WORKDIR /usr/share/pm2
RUN rm -rf ./*
COPY --from=builder /app/dist .
COPY --from=builder /app/pm2.json .
RUN echo "" > .env
ENTRYPOINT [ "pm2-runtime", "start", "pm2.json" ]
