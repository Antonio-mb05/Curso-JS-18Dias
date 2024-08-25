//Configurar con ExpressJS el servidor de la app
const express = require("express");
const app = express();

app.set("port", 3000);
app.listen(3000);

//Llamar al objeto MongoClient del componente mongoDB
const {MongoClient} = require("mongodb");

//Funcion asincrona para hacer las peticiones al servidor
async function usar() {
    //Crrear nueca instancia Mongo Client
    const client = new MongoClient("mongodb://127.0.0.1:27017/mibase");

    //Nos conectamos y hacemos nuestras conexiones
    try{
        const conexion = await client.connect();
        const controlador = conexion.db().collection("clientes");

        let respuesta, filas, filtro;

        //Insertar nuevo registro
        const nuevoCliente = {nombre: "Antonio Marquez", genero: 0, telefono: 12345678, domicilio: "Avd.SanFrancisco"};
        respuesta = await controlador.insertOne(nuevoCliente);
        console.log("Insertado: ", respuesta);

        //Realizar consulta
        filas = await controlador.find().toArray();
        console.log("Seleccion: ", filas);

        //Modificar el registro
        const cambiarCliente = {$set: {genero: 1, telefono: 617544720}};
        filtro = {nombre: "Antonio Marquez"};
        respuesta = await controlador.updateOne(filtro, cambiarCliente);
        console.log("Actualizado: ", respuesta);

        //Realizar consulta
        filtro = {genero: 1};
        filas = await controlador.find(filtro).toArray();
        console.log("Seleccion: ", filas);

        //Eleminar Registro
        filtro = {nombre: "Antonio Marquez"};
        respuesta = await controlador.deleteOne(filtro);
        console.log("Eliminado: ", respuesta)

        //Realizar consulta
        filas = await controlador.find().toArray();
        console.log("Seleccion: ", filas);
    }catch(error){
        console.log(error);
    };
}

usar();