FROM node:16-alpine3.16 AS base

WORKDIR /usr/src/app

ARG OPEN_WEATHER_KEY

ENV OPEN_WEATHER_KEY=$OPEN_WEATHER_KEY

ARG OPEN_CAGE_API_KEY

ENV OPEN_CAGE_API_KEY=$OPEN_CAGE_API_KEY

# --------------> The development dependecies

FROM base AS development_dependecies

ENV NODE_ENV development

COPY yarn.lock package.json ./

RUN yarn

COPY . .

# --------------> The production dependencies

FROM base AS production_dependecies

COPY yarn.lock package.json ./

RUN yarn

COPY . .

# --------------> The development stage

FROM development_dependecies as development

CMD ["yarn", "dev"]

# --------------> The production build

FROM production_dependecies as production_build

RUN yarn build

# --------------> The production stage

FROM nginx:alpine as production

COPY --chown=node:node --from=production_build  /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
