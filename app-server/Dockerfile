# Run development stage
FROM node:20-alpine

# Create the working directory folder
WORKDIR /app

# Copy the package.json and set up/install project dependencies
COPY package*.json ./
RUN npm install --silent
COPY . ./

# Expose on the Docker external port
EXPOSE 4200

# Run the command to start the server
ENTRYPOINT [ "npm", "run", "start" ]