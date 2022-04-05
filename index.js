const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Express on Vercel");
});

app.get('/test', (req, res) => {
    res.send({ msg: 'endpoint de prueba' });
});

app.listen(5000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

module.exports = app;
