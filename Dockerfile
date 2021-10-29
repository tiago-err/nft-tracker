FROM node:14

WORKDIR /nft_tracker

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]