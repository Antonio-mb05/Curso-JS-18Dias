function crearTiendas(contenedorId, min, cantidadTiendas){
    let elementoContenedor = document.getElementById(contenedorId);

    //loop para crear tiendas
    for(let tiendas = 1;tiendas<=cantidadTiendas;tiendas++){
        //crear texto label
        let textoLabel = "Tienda " + tiendas;

        //Crear parrafo de Tienda
        let parrafoTienda = crearParrafoTienda(textoLabel, min);

        //agregar al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }
}
function crearParrafoTienda(textoLabel, valorMin){
    //crear las etiquetas <p>
    let elementoParrafo = document.createElement("p");

    //crear etiqueta label
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText = textoLabel + ": ";

    //conectar con input
    elementoEtiqueta.setAttribute("for", textoLabel);

    //crear input
    let elementoInput = document.createElement("input");

    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);

    //Agregar label e input a parrafo

    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    return elementoParrafo;
}

function extraerNUmeroDesdeElemento(elemento){
    let miTexto = elemento.value;
    let numero = Number(miTexto);

    return numero;
}

function calcular(){
    let ventas = [];
    let posicionVentas = 0;
    let elementosVentas = document.getElementById("itemsTiendas");

    for(let item of elementosVentas.children){
        let valorVenta = extraerNUmeroDesdeElemento(item.children[1]);
        ventas[posicionVentas] = valorVenta;
        posicionVentas++;
    }

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    for(let item of elementosVentas.children){
        let elementoLabel = item.children[1];
        if (elementoLabel.value == ventaMayor){
            elementoLabel.className = "menuInputMayor";
        }
        if (elementoLabel.value == ventaMenor){
            elementoLabel.className = "menuInputMenor";
        }
    }

    let mensaje = "Total Ventas: " + totalVentas;

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