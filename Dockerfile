FROM node:lts-slim AS development
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start:dev" ]

FROM node:lts-slim AS builder
ENV NODE_ENV production
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --production
COPY . .
RUN --mount=type=secret,id=OPEN_CAGE_API_KEY \
  --mount=type=secret,id=OPEN_WEATHER_API_KEY \
  export OPEN_CAGE_API_KEY=$(cat /run/secrets/OPEN_CAGE_API_KEY) && \
  export OPEN_WEATHER_API_KEY=$(cat /run/secrets/OPEN_WEATHER_API_KEY) && \
  npm run build

FROM node:lts-slim AS production
ENV NODE_ENV production
COPY --from=builder /app .
EXPOSE 3000
CMD [ "npm", "run", "start" ]