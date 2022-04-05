const express = require("express");
const app = express();

app.use('/test', (req, res) => {
    console.log('TEST REQ');
    res.send({ message: 'Prueba de endpoint GET' })
})

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});