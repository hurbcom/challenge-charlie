# BUILD
FROM node:16-alpine as build-stage

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build

# BASE
FROM alpine as server

# RUN
RUN apk add nginx; \
    mkdir /run/nginx/; \
    echo "<h1>Hellow, Hellow, Hellooooooow!</h1>" > /var/www/localhost/htdocs/index.html;

COPY --from=build-stage /app/dist /var/www/localhost/htdocs/

#CONFIGURATIONS
ADD $PWD/config/default.conf /etc/nginx/http.d/default.conf
ADD $PWD/config/*.key /etc/ssl/private/
ADD $PWD/config/*.crt /etc/ssl/certs/

#WORKDIR
WORKDIR /var/www/localhost/htdocs

# ENTRYPOINT
COPY $PWD/config/entrypoint.sh /usr/local/bin
RUN chmod +x /usr/local/bin/entrypoint.sh
ENTRYPOINT ["/bin/sh", "/usr/local/bin/entrypoint.sh"]

# EXPOSE PORTS
EXPOSE 80

EXPOSE 443

# RUN CMD

CMD ["/bin/sh", "-c", "nginx -g 'daemon off;'; nginx -s reload;"]