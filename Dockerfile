FROM node:16-alpine
WORKDIR /challenge-charlie
ENV PATH="./node_modules/.bin:$PATH"
COPY package.json /challenge-charlie/package.json
run npm install 
RUN npm install react-scripts@3.3.1 -g 
CMD ["npm", "start"]