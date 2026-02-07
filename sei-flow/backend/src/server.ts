import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index';

// Carrega variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors({
  origin: 'http://localhost:5173', // URL do seu frontend
  credentials: true
}));

app.use(express.json());

// Rotas
app.use('/api', routes);

// Rota básica de teste
app.get('/', (req, res) => {
  res.json({ 
    mensagem: '🚀 Backend funcionando!',
    data: new Date().toISOString(),
    ambiente: process.env.NODE_ENV || 'desenvolvimento'
  });
});

// Inicia servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em: http://localhost:${PORT}`);
  console.log(`📝 API disponível em: http://localhost:${PORT}/api`);
});
