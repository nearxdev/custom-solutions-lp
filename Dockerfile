# syntax=docker/dockerfile:1

# Base image com Node
FROM node:24.13-alpine3.22 AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

# Etapa de dependências (cache otimizado pelas mudanças no lockfile)
FROM base AS deps
COPY package.json  ./
RUN npm i --legacy-peer-deps

# Etapa de build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Etapa de produção (runtime enxuto)
FROM node:24.13-alpine3.22 AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOST=0.0.0.0
ENV PORT=3000

# Usuário não-root por segurança
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Copia artefatos de build e arquivos necessários
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json


# Instala apenas dependências de produção
RUN npm i --omit=dev --legacy-peer-deps

USER nextjs

# Porta padrão do Next.js
EXPOSE 3000

# Inicializa a aplicação em produção (usa PORT do ambiente)
CMD ["npm", "start"]
