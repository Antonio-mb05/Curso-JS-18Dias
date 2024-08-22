let datos = {
    title: "Nuevo Post",
    body: "Mi contenido",
}

let pedido1 = axios.get("https://api.ejemplo.com/data1");
let pedido2 = axios.get("https://api.ejemplo.com/data2");
let pedido3 = axios.get("https://api.ejemplo.com/data3");

axios.all([pedido1,pedido2,pedido3])
.then(axios.spread((respuesta1, respuesta2, respuesta3) => {
    //Codigo
}))
.catch(error => {
    //Manejar Errores
});