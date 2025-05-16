# syntax=docker/dockerfile:1
FROM node:22-alpine AS builder

RUN apk update && apk add git python3 make g++ openssl busybox

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy just the package files first for better caching
COPY package.json pnpm-lock.yaml* ./

# Force CI mode which avoids interactive prompts
ENV CI=true
ENV HUSKY=0

# Install dependencies non-interactively
RUN pnpm install --frozen-lockfile

# Now copy the rest of the code
COPY . .

# Build storybook
RUN pnpm build-storybook

# Production image using a simple static file server
FROM node:22-alpine AS dist

WORKDIR /app

# Copy the storybook-static directory which contains the built storybook
COPY --from=builder /app/storybook-static ./storybook-static

# Install a simple HTTP server
RUN npm install -g http-server

# Expose port for Cloud Run
EXPOSE 8080

# Start the HTTP server on the port specified by the PORT environment variable
CMD ["sh", "-c", "http-server ./storybook-static -p ${PORT:-8080} --cors --silent"]