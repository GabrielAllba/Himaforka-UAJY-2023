FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json pnpm-lock.yaml* ./

RUN yarn global add pnpm && pnpm install --frozen-lockfile

COPY . .

RUN yarn build

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

USER nextjs

ENV HOSTNAME 0.0.0.0
ENV PORT 3000
EXPOSE 3000


CMD ["node", "server.js"]
