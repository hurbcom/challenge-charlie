FROM nginx:alpine
RUN rm /etc/nginx/conf.d/*
COPY default.conf /etc/nginx/conf.d/
COPY --from=development-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]