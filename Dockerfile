FROM node:14-alpine3.14 As development

RUN apk add --no-cache bash git

RUN npm i -g @nestjs/cli

WORKDIR /usr/src/app

CMD ["node", "dist/main"]