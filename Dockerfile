FROM nginx
MAINTAINER Felippe Maurício

ENV PORT 8080

COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY build /usr/share/nginx/html

EXPOSE $PORT

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'
