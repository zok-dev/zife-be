# Use an official lightweight Node.js image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the project 
RUN npm run build

#Expose the port the app runs on
EXPOSE 3000

#Run the app
CMD ["npm", "run", "start"]
