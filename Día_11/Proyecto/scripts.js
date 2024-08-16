function cargarCuenta(){
    
    let datosCuenta;
    fetch("cuenta.json")
    .then(res => res.json())
    .then((salida) => {
        datosCuenta = salida;

        let textoBanco = document.getElementById("banco");
        textoBanco.innerText = datosCuenta.banco;
    })
    .catch(function(error){
        alert(error);
    })
    
    
}