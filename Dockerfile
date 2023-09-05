# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container's working directory
COPY package*.json ./

# Install the application dependencies inside the container
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Set the environment variable to run the app in production mode
ENV NODE_ENV=production

# Expose port 3000 (or whatever port your Fastify app runs on)
EXPOSE 3000

# Define the command that will run when the container starts
CMD [ "npm", "start" ]