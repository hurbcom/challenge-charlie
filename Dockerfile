FROM node:18.9.1-alpine AS builder

RUN mkdir /app && chown -R node:node /app

USER node

WORKDIR /app
COPY --chown=node:node package.json yarn.lock ./

ENV NODE_ENV=production

RUN yarn install --frozen-lockfile

COPY --chown=node:node . .

RUN sed -i 's/\(\s*"homepage": ".*\)//' package.json
RUN yarn build

FROM nginx:alpine-slim

COPY --from=builder --chown=nginx:nginx /app/build /usr/share/nginx/html
