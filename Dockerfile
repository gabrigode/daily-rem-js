FROM node:24

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Verify that the dist folder exists
RUN test -d dist || (echo "Build failed: dist folder not found" && exit 1)

# Expose the application port (if needed)
EXPOSE 3000

# Start the application
CMD ["node", "dist/index.js"]