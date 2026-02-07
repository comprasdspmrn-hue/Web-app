import { Request, Response } from 'express';

export const getHome = (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Bem-vindo à API!',
    endpoints: {
      users: '/api/users',
      products: '/api/products',
      docs: '/api/docs'
    }
  });
};

export const getHealth = (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
};