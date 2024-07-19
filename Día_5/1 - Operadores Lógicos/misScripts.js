function calcular(){
    let edad = +document.getElementById("edad").value;
    let respuesta1 = document.getElementById("respuesta1");
    let respuesta2 = document.getElementById("respuesta2");
    let respuesta3 = document.getElementById("respuesta3");
    
    let puedeBeber = edad >= 18;
    respuesta1.textContent = puedeBeber;

    let puedeIngresar = edad >= 18 && edad <=30;
    respuesta2.textContent = puedeIngresar;

    let entradaGratis = edad == 20 || edad == 25;
    respuesta3.textContent = entradaGratis;
}
