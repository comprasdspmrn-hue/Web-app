# Etapa 1: build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: servidor web
FROM nginx:alpine

# Remove config padrão do nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia build do Vite
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe porta padrão
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
