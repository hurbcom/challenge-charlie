FROM node:14.16-alpine AS base
  WORKDIR /app
  ENV PORT=3000
  COPY . .
  RUN yarn

FROM base AS development
  ENV NODE_ENV=development
  EXPOSE ${PORT}
  CMD ["yarn", "dev"]

FROM base AS production
  ENV NODE_ENV=production
  EXPOSE ${PORT}
  RUN yarn build
  CMD ["yarn", "start"]