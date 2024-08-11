function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

let coche1 = new Automovil("Hundai","i30","Blanco","2020","Antonio");
let coche2 = new Automovil("BMW","M4","Negro","2019","Juan");
let coche3 = new Automovil("Nissan","GTR","Naranja","2024","Victor");
let automoviles = [coche1,coche2,coche3];

Automovil.prototype.venderAutomovil = function(titular){
    this.titular = titular;
}

Automovil.prototype.verAuto = function(){
let mensaje = this.marca + " " + this.modelo + " - " + this.anio + " - " + this.titular;
return mensaje;
}

Automovil.prototype.encender = function(){
    alert("El automovil se encendió");
}

function mostrarAutomoviles(){
    let lista = document.getElementById("listaAutomoviles");
    
    for(let automovil of automoviles){
        let item = document.createElement("li");
        item.innerText = automovil.verAuto();
        lista.appendChild(item);
    }
}