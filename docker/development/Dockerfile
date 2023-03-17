FROM node:18-alpine 

# Create a directory for the application
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the application files
COPY . .

# Set environment variables
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

# Expose the port that the application will run on
EXPOSE 3000

# Start the application in development mode with fast refresh enabled
CMD ["yarn", "dev"]
