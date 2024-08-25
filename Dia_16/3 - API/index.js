//Importar framework express
const express = require("express");
const app = express();

//Obtener el modulo conexion.js
const mongoDB = require("./conexion");

//Configurar API
app.use(express.json());

//Definir nuevo metodo get
app.get("/clientes", (pedido, respuesta) => {
    
})


//Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log("El servidor esta en linea")
})