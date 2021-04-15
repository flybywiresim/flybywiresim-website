FROM timbru31/node-alpine-git:14 as builder

WORKDIR /app
ENV NODE_ENV=development

COPY package*.json ./

RUN npm install

COPY tsconfig*.json ./
COPY craco.config.js ./
COPY tailwind.config.js ./
COPY ./src ./src
COPY public_old ./public

RUN npm run build


FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
