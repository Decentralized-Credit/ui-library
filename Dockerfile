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

# Production image using serve
FROM node:22-alpine AS dist

# Install serve globally
RUN npm install -g serve

USER node
WORKDIR /app

# Copy the storybook-static directory which contains the built storybook
COPY --from=builder /app/storybook-static ./storybook-static

# Expose port for serve
EXPOSE 8080

# Start serve to host the static files
CMD ["serve", "-s", "storybook-static", "-l", "8080"]