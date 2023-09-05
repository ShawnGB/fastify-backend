# Stage 1: Building the code
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if you have one) to install dependencies
COPY package*.json ./

# Install dependencies (including devDependencies for building the app)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Generate Prisma client
RUN npx prisma generate

# Stage 2: Run the built code
FROM node:16

WORKDIR /app

# Copy necessary files from the build stage
COPY --from=build /app/package*.json ./
COPY --from=build /app/prisma ./prisma/
COPY --from=build /app/server.js ./server.js
# If you have other directories or files that need to be present at runtime, copy them similarly

# Install only production dependencies
RUN npm install --production

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]
