//PUT (update)
fetch("https://jsonplaceholder.typicode.com/posts/5",{
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Nuevo Titulo",
        body: "Nueva descripcion",
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error("Error: "+error));

//Delete
fetch("https://jsonplaceholder.typicode.com/posts/5",{
    method: "DELETE",
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error("Error: "+error));

//Patch (update pero parcial sin actualizar todos los datos)
fetch("https://jsonplaceholder.typicode.com/posts/5",{
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Nuevo Titulo",
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error("Error: "+error));