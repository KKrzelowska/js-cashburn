# Use the official image as a parent image.
FROM node

RUN mkdir /app
# Set the working directory.
COPY . /app

WORKDIR /app
# Copy the file from your host to your current location.
COPY package.json .


# Run the command inside your image filesystem.
RUN npm install
ENV Path /usr/src/app/node_modules/.bin:$PATH

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 8080

# Run the specified command within the container.
CMD [ "npm", "start" ]

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .