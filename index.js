const express = require("express");
const app = express();

app.get('/test', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end({ msg: 'endpoint de prueba'});
  });

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

module.exports = app;