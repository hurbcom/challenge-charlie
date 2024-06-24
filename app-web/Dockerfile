# Build stage
FROM node:20-alpine

# Create the working directory folder
WORKDIR /app

# Set working environment
ENV NODE_ENV=development

# Copy the package.json and set up/install project dependencies
COPY package*.json ./
RUN npm install --silent
COPY . ./

# Expose on the Docker external port
EXPOSE 8080

# Run the command to start the server
ENTRYPOINT [ "npm", "run", "dev" ]

