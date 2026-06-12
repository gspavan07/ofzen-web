# ==========================================
# Stage 1: Build the React Application
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies based on package-lock.json for deterministic builds
COPY package*.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the production application
RUN npm run build

# ==========================================
# Stage 2: Serve the application with Nginx
# ==========================================
FROM nginx:alpine

# Copy custom nginx configuration for SPA routing & headers
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production builds from Stage 1 to Nginx default public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
