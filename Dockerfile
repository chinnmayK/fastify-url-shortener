# =========================
# Base image
# =========================
FROM node:20.16-alpine3.19 AS base
WORKDIR /app


# =========================
# Development stage
# =========================
FROM base AS development

# Install dependencies (including dev deps)
COPY package*.json ./
RUN npm ci

# App source will be mounted by docker-compose
EXPOSE 5000

CMD ["npm", "run", "dev"]


# =========================
# Production stage
# =========================
FROM base AS production

# Install production dependencies only
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy app source
COPY . .

EXPOSE 5000

CMD ["node", "src/server.js"]