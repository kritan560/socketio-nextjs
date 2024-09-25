FROM oven/bun

WORKDIR /app

COPY . .

RUN bun install

RUN bun run build

CMD [ "bun", "run", "start" ]