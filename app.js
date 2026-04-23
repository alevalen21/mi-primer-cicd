// app.js — API web con Express

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function sumar(a, b) {
  return a + b;
}

app.get('/', (req, res) => {
  res.json({ mensaje: 'Hola Mundo', version: '1.0' });
});

app.get('/sumar/:a/:b', (req, res) => {
  const resultado = sumar(Number(req.params.a), Number(req.params.b));
  res.json({ resultado });
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
}

module.exports = { sumar, app };