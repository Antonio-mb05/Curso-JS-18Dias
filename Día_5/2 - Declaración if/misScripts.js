function evaluar(){
    let precio = +document.getElementById("precio").value;
    let decision = document.getElementById("decision");

    if(precio <= 5){
        decision.textContent = "Comprar 2 botellas";
    }
}