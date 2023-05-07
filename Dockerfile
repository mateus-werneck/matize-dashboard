FROM node:lts-alpine AS development

WORKDIR /usr/src/app/dashboard

COPY package.json yarn.lock ./

COPY . .

RUN yarn install --frozen-lockfile

EXPOSE 9013

CMD ["npm", "run", "dev"]
