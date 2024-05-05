# Use an official Cypress Docker image
FROM cypress/browsers

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in package.json
RUN npm install

# Run the tests
CMD ["npm", "run", "test"]
