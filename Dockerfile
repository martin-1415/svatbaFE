FROM node:19-bullseye

WORKDIR /app

COPY ./dist/ ./dist/

EXPOSE 4000 4000
RUN npm install pm2@latest -g

ENTRYPOINT ["PORT=4000 pm2 start npm --name \"svatbaFE\" -- start"]

