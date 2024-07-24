function extraerNUmeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;

    let numero = Number(miTexto);

    return numero;
}
function calcular(){
    let ventas = [];

    ventas[0] = extraerNUmeroDesdeElemento("ventasTienda1");
    ventas[1] = extraerNUmeroDesdeElemento("ventasTienda2");
    ventas[2] = extraerNUmeroDesdeElemento("ventasTienda3");
    ventas[3] = extraerNUmeroDesdeElemento("ventasTienda4");
    ventas[4] = extraerNUmeroDesdeElemento("ventasTienda5");
    ventas[5] = extraerNUmeroDesdeElemento("ventasTienda6");

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    let mensaje = "Total Ventas: " + totalVentas +
                  " / Venta Mayor: " + ventaMayor +
                  " / Venta Menor: " + ventaMenor;

    let salida = document.getElementById("parrafoSalida");
    salida.innerText = mensaje;
}

function sumarTotal(array){
    let total = 0;

    for(let num of array){
        total += num;
    }

    return total;
}

function calcularMayor(array){
    let mayorVenta = array[0];

    for(let num of array){
        if(num > mayorVenta){
            mayorVenta = num;
        }
    }

    return mayorVenta;
}

function calcularMenor(array){
    let menorVenta = array[0];

    for(let num of array){
        if(num < menorVenta){
            menorVenta = num;
        }
    }

    return menorVenta;
}