import Express from 'express';
import { PrismaClient } from '@prisma/client';

const router = Express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const colaboradores = await prisma.colaborador.findMany({});
  res.send(colaboradores)
});
router.get('/', async (req, res) => {
  const passageiros = await prisma.passageiro.findMany({});
  res.send(passageiros)
});

router.post('/', (req, res) => {
  res.send('Post colaborador!');
});
router.put('/:id', (req, res) => {
  res.send('Put colaborador!');
});
router.delete('/:id', (req, res) => {
  res.send('Delete colaborador!');
});

export default router;