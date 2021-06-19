# Base Stage
FROM node:lts-alpine as base-stage
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

# Build Stage
FROM base-stage as build-stage
RUN yarn build

# Production Stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
