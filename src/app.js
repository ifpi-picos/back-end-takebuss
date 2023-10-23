import Express from 'express';
import logger from 'morgan';
import rotasDePassageiro from './rotas/rotasDePassageiro.js';
import rotasDeColaborador from './rotas/rotasDePassageiro.js';

const app = Express();
app.use(logger('dev'));

app.use('/passageiro', rotasDePassageiro);
app.use('/colaborador', rotasDeColaborador);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
