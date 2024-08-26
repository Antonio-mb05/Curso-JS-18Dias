//Llamamos al componente sql
const mysql = require('mysql2');

//Establecer los parametros de la conexion
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ant08nio_mb05',
    database: 'universidad'
});

//Nos conectamos con la base
conexion.connect(function (error) {
    if (error) throw error;
    console.log('Conectado a la base de datos');
});

//Exportamos el objeto con los datos de la conexion
module.exports = { conexion };