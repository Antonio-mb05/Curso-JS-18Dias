function consultarPrecio(){
    let textoPrecio = document.getElementById("precio");
    let fruta = document.getElementById("fruta").value;

    switch(fruta){
        case "1" :
            textoPrecio.textContent = "8.35€";
            break;

        case "2" :
            textoPrecio.textContent = "6.70€";
            break;

        case "3" :
            textoPrecio.textContent = "5.23€";
            break;

        case "4" :
            textoPrecio.textContent = "4.95€";
            break;
        
        case "5" :
            textoPrecio.textContent = "5.35€";
            break;
    }
}