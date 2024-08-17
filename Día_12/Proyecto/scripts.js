//Variables
let select = document.getElementById("select");
let buscador = document.getElementById("buscador");
let botonBuscar = document.getElementById("botonBuscar");
let lista = document.getElementById("lista");
let archivoBase = "peliculas.json";

//Escuchadores
select.addEventListener("change", cambioBusqueda);

select.addEventListener("cambioArchivo",avisoCambio);

buscador.addEventListener("keydown", verificarTecla);

botonBuscar.addEventListener("click", realizarBusqueda);

//Funciones
function avisoCambio(){
    alert("Se ha modificado el archivo base a "+ archivoBase);
}

function cambioBusqueda(){
    archivoBase = select.value;

    let cambioArchivo = new CustomEvent("cambioArchivo");
    select.dispatchEvent(cambioArchivo);
}

function verificarTecla(event){
    if( (event.keyCode < 65 || event.keyCode > 90) && event.keyCode != 8 && event.keyCode != 32){
        console.log(event.keyCode);
        event.preventDefault();
    } 
}

function realizarBusqueda(){
    lista.innerHTML = "";

   fetch(archivoBase)
   .then(res => res.json())
   .then((salida) => {
    for(let item of salida.data){
        if(item.nombre.startsWith(buscador.value.toUpperCase())){
            let parrafo = document.createElement("p");
            parrafo.id = item.nombre;
            parrafo.innerHTML = item.sinopsis;
            parrafo.style.display="none";

            let li = document.createElement("li");
            li.innerHTML = item.nombre;

            li.addEventListener("mouseover", function(){
                let p = document.getElementById(item.nombre);
                p.style.display = "block";
            });
            li.addEventListener("mouseout", function(){
                let p = document.getElementById(item.nombre);
                p.style.display = "none";
            });
            li.appendChild(parrafo);
            lista.appendChild(li)
        }
    }

   }).catch(function(error){
    alert(error);
   })
}