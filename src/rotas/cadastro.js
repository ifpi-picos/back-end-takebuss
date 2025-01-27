import { PrismaClient } from '@prisma/client';
import Express from 'express';
import { criptografaSenha } from '../servicos/senha.js';

const router = Express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  try {
    const { nome } = req.body;
    const { email } = req.body;
    const { senha } = req.body;
    const senhaCriptografada = criptografaSenha(senha);
    
    const usuario = { nome, email, senha: senhaCriptografada };

    await prisma.usuario.create({
      data: usuario,
    });
    res.status(201).send('Usuário salvo com sucesso!');
    console.log("pronto")
  } catch (erro) {
    console.error(erro);
    console.log("Erro");
    res.status(400).send('erro ao salvar usuario!');
  }
});

export default router;
