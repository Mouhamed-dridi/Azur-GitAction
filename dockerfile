# Use the official Nginx image as a parent image
FROM nginx:alpine

# Copy the HTML file to the Nginx html directory
COPY home.html /usr/share/nginx/html/

# Copy the JavaScript file to the Nginx html directory
COPY joke.js /usr/share/nginx/html/

# Expose port 80
EXPOSE 8080

# Start Nginx when the container has provisioned
CMD ["nginx", "-g", "daemon off;"]