import cors from 'cors';
import Express from 'express'; // importa o módulo do express
import logger from 'morgan';
import aut from './middlewares/aut.js';
import cadastro from './rotas/cadastro.js';
import login from './rotas/login.js';


// criar um instância/aplicação Express
const app = Express();
// middleware para converter os body da requisição para json
app.use(Express.json());
app.use(cors());
app.use(logger('dev'));

app.use('/cadastro', cadastro);
app.use('/login', login);
app.use(aut); // middleware de autenticacao
//colocar abaixo todas as rotas privadas que precisam de autenticacao
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
