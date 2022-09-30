# dockerfile para rodar o build no docker
FROM node:alpine

WORKDIR /usr/app

COPY build/* ./

RUN npm install -g serve

COPY . .

EXPOSE 3000

CMD ["serve", "-s", "build"]