const express = require('express');
const debug = require('debug')('app:main')

const {Config} =require("./src/config/index");
const app = express();

app.use(express.json());

//modulos
var PORT=parseInt(Config.port);

app.listen(PORT, ()=>{

    debug(`Servidor escuchando en el puerto ${PORT}`);

})
app.listen();