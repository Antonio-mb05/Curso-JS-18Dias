let input = document.getElementById("miCampo");

function verificarNumero(event){
    if(event.keyCode < 48 || event.keyCode > 57){
        event.preventDefault();
    };
};

input.addEventListener("keydown", verificarNumero);

input.addEventListener("keyup", function(event){
    console.log("Entrada del usuario: "+ event.target.value);
});

input.addEventListener("keypress", function(event){
    console.log("Caracter ingresado: "+ event.key);
});