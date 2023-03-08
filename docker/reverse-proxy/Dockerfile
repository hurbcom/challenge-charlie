FROM nginx:alpine

COPY ../docker/reverse-proxy/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 3001

ENTRYPOINT ["nginx","-g","daemon off;"]
