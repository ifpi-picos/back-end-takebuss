const express = require('express');
import Express from 'express';
import logger from 'morgan';
import rotasDePassageiro from './rotas/rotasDePassageiro.js';
import rotasDeColaboradores from './rotas/rotasDePassageiros.js';


const app = Express();
app.use(logger('dev'));
app.use(Express.json());


app.get('/', (req, res) => {
  res.send('Ok!');
});

app.use(rotasDeColaboradores);
app.use(rotasDePassageiro);

app.listen(3000, () => {
  console.log('app listening on port 3000!');
});