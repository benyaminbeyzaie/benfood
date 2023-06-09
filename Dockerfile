FROM docker.repos.balad.ir/node:16 as builder

WORKDIR /benfood
RUN npm i -g pnpm
COPY . .
RUN pnpm install
RUN pnpm build

FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
COPY --from=builder /benfood/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]