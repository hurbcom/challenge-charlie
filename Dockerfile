FROM node:14-alpine AS build-stage
WORKDIR /app
COPY package.json /app
RUN npm i
COPY . /app
RUN  npm run build

FROM nginx:alpine AS dist-stage
RUN rm /etc/nginx/conf.d/*
COPY --from=build-stage /app/nginx/default.conf /etc/nginx/conf.d/
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]