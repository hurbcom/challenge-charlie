FROM node:14-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM mhart/alpine-node
RUN npm i -g serve
WORKDIR /app
COPY --from=builder /app/dist .
CMD ["npx", "serve"]