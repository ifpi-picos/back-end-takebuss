import Express from 'express'; // importa o módulo do express
import logger from 'morgan';
import rotasDePassageiro from './rotas/rotasDePassageiro.js';
import rotasDeColaborador from './rotas/rotasDeColaborador.js';

// criar um instância/aplicação Express
const app = Express();
// middleware para converter os body da requisição para json
app.use(Express.json());
// app.use(primeiro);
// app.use(segundo);

app.use(logger('dev'));

app.use('/passageiro', rotasDePassageiro);
app.use('/colaborador',rotasDeColaborador)

app.listen(3000, () => {
  console.log('Server running on port 3000');
});