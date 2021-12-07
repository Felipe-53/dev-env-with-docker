FROM node:lts-alpine

WORKDIR /app

COPY ./prisma ./prisma

COPY package*.json ./

COPY tsconfig.json ./

RUN npm install

RUN npx prisma generate

EXPOSE 3500

# prisma studio
EXPOSE 5555

CMD ["npm", "run", "dev"]
