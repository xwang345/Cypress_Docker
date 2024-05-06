# Use an official Cypress Docker image
FROM cypress/browsers

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of the current directory contents into the container at /app
COPY . .

# Run the tests and start the server
CMD npm run test && npx ts-node mochawesome-reporter-server.ts