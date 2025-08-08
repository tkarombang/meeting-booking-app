FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install -g npm@latest

RUN npm install --ignore-scripts --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]
