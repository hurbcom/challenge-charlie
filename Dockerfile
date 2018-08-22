FROM mhart/alpine-node:latest

WORKDIR /var/app
 
COPY . /var/app

EXPOSE 8080
 
ENV NODE_ENV=production
 
CMD ["npm", "start"]