#!/bin/bash

echo "🚀 Iniciando setup do projeto SEI-FLOW..."

# Backend
echo "📦 Instalando dependências do backend..."
cd backend || exit
npm install

# Frontend
echo "📦 Instalando dependências do frontend..."
cd ../frontend || exit
npm install

echo "✅ Setup concluído com sucesso!"
echo "👉 Para rodar:"
echo "Backend:  cd backend && npm run dev"
echo "Frontend: cd frontend && npm run dev"
