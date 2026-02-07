import { Router } from 'express';
import { getHome, getHealth } from '../controllers/homeController';

const router = Router();

// Rotas públicas
router.get('/', getHome);
router.get('/health', getHealth);

// Rotas de exemplo (você vai expandir depois)
router.get('/users', (req, res) => {
  res.json([
    { id: 1, nome: 'João', email: 'joao@email.com' },
    { id: 2, nome: 'Maria', email: 'maria@email.com' }
  ]);
});

export default router;