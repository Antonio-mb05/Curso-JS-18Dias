async function cargarTabla() {
    try{
        fetch("https://my-json-server.typicode.com/fedegaray/telefonos/db", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(respuesta => respuesta.json())
        .then(data => {
            let tabla = document.getElementById("miTabla");
            let salida = "";
            for(let dispositivo of data.dispositivos){
                salida += `
                    <tr>
                        <td>${dispositivo.id}</td>
                        <td>${dispositivo.marca}</td>
                        <td>${dispositivo.modelo}</td>
                        <td>${dispositivo.color}</td>
                        <td>${dispositivo.almacenamiento}</td>
                        <td>${dispositivo.procesador}</td>
                    </tr>                
                `;
            }
            tabla.innerHTML = salida;
        })
        .catch(error => { throw new Error("Error en la solicitud: " +error)})
    }catch (error){
        console.error(error);
    }
}