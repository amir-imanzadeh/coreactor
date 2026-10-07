FROM node:22-bookworm

WORKDIR /app

COPY package*.json ./

RUN if [ -f package.json ]; then npm install; fi

COPY . .

CMD ["bash"]
