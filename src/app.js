'use strict';
// Require
const express = require ('express');
const app = express ();
const PORT = process.env.PORT || 3002;
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');


//Routes
app.get('/', (req, res, next) => {
  res.status(200).send('Welcome!');
});

app.get('/bad', (req, res, next) => {
  next('incorrect route');
});

app.use('*', notFound);

app.use(errorHandler);











function start(){
  app.listen(PORT,()=>console.log (`server is running on ${PORT}`));
}


module.exports = { app, start};
