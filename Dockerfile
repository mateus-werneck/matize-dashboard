FROM node:18-alpine AS development

RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app/dashboard

COPY package.json yarn.lock ./

COPY . .

RUN yarn install --frozen-lockfile

EXPOSE 9013

CMD ["npm", "run", "dev"]
