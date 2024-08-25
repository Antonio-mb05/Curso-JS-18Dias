//Configurar con eExpressJS el servidor de la app
const express = require("express");
const app = express();
app.set("port", 3000);
app.listen(3000);

//Llamar al componente de mysql
var mysql = require("mysql2");

//Establecer parametros de la conexion
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ant08nio_mb05",
    database: "mibasenueva"
});

//Nos conectamos con la base
connection.connect();

//Agregar nuevo registro
connection.query('INSERT INTO cliente VALUES (1, "ANTONIO", 1, 1234567, "Avd. San Francisco")', function(error, resultados){
    if(error) throw error;
    console.log(resultados);
});

//Realizar consulta a la tabla
connection.query('SELECT * FROM cliente', function(error, filas){
    if(error) throw error;
    console.log(filas);
});

//Realizar modificacion de registro
connection.query('UPDATE cliente SET genero = 0, telefono = 617544720 WHERE idCliente = 1', function(error, resultados){
    if(error) throw error;
    console.log(resultados);
})

//Realizar consulta a la tabla
connection.query('SELECT * FROM CLIENTE', function(error, filas){
    if(error) throw error;
    console.log(filas);
});

//Eliminar registro
connection.query('DELETE FROM cliente WHERE idCliente = 1', function(error,resultados){
    if(error) throw error;
    console.log(resultados);
})

//Realizar consulta a la tabla
connection.query('SELECT * FROM CLIENTE', function(error, filas){
    if(error) throw error;
    console.log(filas);
});

//Cerramos la conexion
connection.end();