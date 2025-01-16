# Use Node.js slim image for smaller size
FROM node:20-slim

# Create app directory
WORKDIR /usr/src/app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy app source
COPY . .

# Expose port (documentation only)
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]