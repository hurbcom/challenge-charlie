FROM node:lts-alpine3.16 AS development
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
EXPOSE 3000 80
CMD [ "yarn", "start" ]

FROM node:lts-alpine3.16 AS builder
ENV NODE_ENV production
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --production
COPY . .
RUN --mount=type=secret,id=REACT_APP_GOOGLE_KEY \
  --mount=type=secret,id=REACT_APP_OPEN_WEATHER_KEY \
  --mount=type=secret,id=REACT_APP_OPEN_CAGE_KEY \
  export REACT_APP_GOOGLE_KEY=$(cat /run/secrets/REACT_APP_GOOGLE_KEY) && \
  export REACT_APP_OPEN_WEATHER_KEY=$(cat /run/secrets/REACT_APP_OPEN_WEATHER_KEY) && \
  export REACT_APP_OPEN_CAGE_KEY=$(cat /run/secrets/REACT_APP_OPEN_CAGE_KEY) && \
  yarn build

FROM nginx:stable-alpine AS production
ENV NODE_ENV production
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3001 80
CMD ["nginx", "-g", "daemon off;"]
