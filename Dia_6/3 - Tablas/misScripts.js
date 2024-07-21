function mostrarTabla(){
    //Obtener numero
    let num = +document.getElementById("num").value;

    //Obtener tabla
    let tabla = document.getElementById("listaTabla");

    for(let x=0;x<=10;x++){
        let resultado = x * num;
        let textoResultado = num + " * " + x + " = " + resultado;

        let lista = document.createElement("li");
        lista.innerText = textoResultado;
        tabla.appendChild(lista);
    }
}