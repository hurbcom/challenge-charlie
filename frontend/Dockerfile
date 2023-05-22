FROM node:lts-alpine as builder
RUN mkdir -p /app
WORKDIR /app
COPY package.json .
RUN yarn install --frozen-lockfile
COPY . .
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ARG VITE_BACKEND_API=
ENV VITE_BACKEND_API=${VITE_BACKEND_API}
RUN echo "VITE_BACKEND_API=${VITE_BACKEND_API}" > .env
RUN yarn build

FROM nginx:1.19.0 as production
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
