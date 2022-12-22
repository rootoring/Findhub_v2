FROM node:16.14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build 

EXPOSE 3000

ENV HOST=0.0.0.0

ENV PORT=3000

CMD [ "npm", "start" ]