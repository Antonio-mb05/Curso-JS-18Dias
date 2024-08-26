//Configurar con ExpressJS el servidor de la app
const express = require("express");
const app = express();

//Guardar el componente MySQL que importamos desde conexion.js
const mySQL = require("./conexion");

//Configurar nuestra API para que trabaje bajo el formato JSON
app.use(express.json());


//Metodo GET para consultar un estudiante
app.get("/estudiantes/:idEstudiante", (pedido, respuesta) => {
    mySQL.conexion.query('SELECT * FROM estudiantes WHERE idEstudiante =' + pedido.params.idEstudiante, function(error, resultados) {
      if(error) throw error;
      respuesta.send(resultados);
    });
})

//metodo POST para agregar un estudiante
app.post("/estudiantes/create", (pedido, respuesta) => {
    mySQL.conexion.query('INSERT INTO estudiantes (nombre, email) VALUES ("' + pedido.body.nombre + '", "' + pedido.body.email + '")', function(error, resultados) {
      if(error) throw error;
      respuesta.send("Estudiante registrado: Id " + resultados.insertId);
    });
})

//metodo POST agregar una nota
app.post("/notas/create", (pedido, respuesta) => {
    mySQL.conexion.query('INSERT INTO notas (idEstudiante, idCurso, nota, fecha) VALUES ("' + pedido.body.idEstudiante + '", "' + pedido.body.idCurso + '", "' + pedido.body.nota + '", "' +  pedido.body.fecha + '")', function(error, resultados){
      if(error) throw error;
      respuesta.send("Nota Registrada: Id " + resultados.insertId);
    })
})

//metodo PUT actualizar una nota
app.put("/notas/:id/update", (pedido, respuesta) => {
  mySQL.conexion.query('UPDATE notas SET idEstudiante = "' + pedido.body.idEstudiante + '"'
                                + ', idCurso = "' + pedido.body.idCurso + '"'
                                + ', nota = "' + pedido.body.nota + '"'
                                + ', fecha = "' + pedido.body.fecha + '" '
                                + 'WHERE idNota = ' + pedido.params.id, function(error, resultados){
        if(error) throw error;
        respuesta.send("Nota Modificada");
      }
   )
})

//metodo DELATE borrar una nota
app.delete("/notas/:id/delete", (pedido, respuesta) => {
  mySQL.conexion.query('DELETE FROM notas WHERE idNota = ' + pedido.params.id, function(error, resultados){
    if(error) throw error;
    respuesta.send("Nota ELIMINADA");
  })
})

//metodo GET obtener notas aprobadas
app.get("/notas/aprobados", (pedido, respuesta) => {
  mySQL.conexion.query('SELECT * FROM notas WHERE nota > 5', function(error, resultados) {
    if(error) throw error;
    respuesta.send(resultados);
  });
})

//Iniciar servidor en el pueto 3000
app.listen(3000, () => {
  console.log("El servidor esta en linea")
})