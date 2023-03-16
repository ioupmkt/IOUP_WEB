FROM node:lts

# Create directory for the application
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy the application files
COPY . .

# Install dependencies
RUN npm install


# Expose port 5173
EXPOSE 5173

# Start the application
CMD ["npm","run", "dev-host"]