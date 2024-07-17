
function sumar(){
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    mostrarResultado(num1 + num2);
}

function restar(){
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    mostrarResultado(num1 - num2);
}

function multiplicar(){
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    mostrarResultado(num1 * num2);
}

function dividir(){
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    mostrarResultado(num1 / num2);
}

function potencia(){
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    mostrarResultado(Math.pow(num1,num2));
}

function raiz(){
    let num = +document.getElementById("num2").value;
    mostrarResultado(Math.sqrt(num));
}

function absoluto(){
    let num = +document.getElementById("num2").value;
    mostrarResultado(Math.abs(num));
}

function random(){
    let aux;
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    if(num2>num1){
        aux = num1;
        num1 = num2;
        num2 = aux;
    }
    num1++;
    mostrarResultado(Math.floor(Math.random() * (num1 - num2) + num2));
}

function round(){
    let num = +document.getElementById("resultado").value;
    mostrarResultado(Math.round(num));
}
function floor(){
    let num = +document.getElementById("resultado").value;
    mostrarResultado(Math.floor(num));
}
function ceil(){
    let num = +document.getElementById("resultado").value;
    mostrarResultado(Math.ceil(num));
}
function mostrarResultado(resultado){
    document.getElementById("resultado").value = resultado;
}