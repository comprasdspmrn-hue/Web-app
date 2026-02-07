# Imagem base com Node
FROM node:20-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas arquivos de dependências primeiro (cache)
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Compila o TypeScript
RUN npm run build

# Porta usada pelo backend
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
