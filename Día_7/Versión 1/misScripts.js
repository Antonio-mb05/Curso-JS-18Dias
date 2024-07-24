function extraerNUmeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;

    let numero = Number(miTexto);

    return numero;
}
function calcular(){
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;

    ventas1 = extraerNUmeroDesdeElemento("ventasTienda1");
    ventas2 = extraerNUmeroDesdeElemento("ventasTienda2");
    ventas3 = extraerNUmeroDesdeElemento("ventasTienda3");
    ventas4 = extraerNUmeroDesdeElemento("ventasTienda4");
    ventas5 = extraerNUmeroDesdeElemento("ventasTienda5");
    ventas6 = extraerNUmeroDesdeElemento("ventasTienda6");

    let totalVentas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;

    let mensaje = "Total Ventas: " + totalVentas;

    let salida = document.getElementById("parrafoSalida");
    salida.innerText = mensaje;
}