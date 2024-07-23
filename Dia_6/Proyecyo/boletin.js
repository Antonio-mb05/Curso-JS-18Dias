let notas = [9,10,9,3,10];

function mostrarNotas(){
    let lista = document.getElementById("listaNotas");

    for(let nota of notas){
        let item = document.createElement("li");

        item.innerText = nota;
        lista.appendChild(item);
    }
}

function mostrarMedia(){
    let mensajeMedia = document.getElementById("media");
    let media = 0;
    for(let x=0;x<5;x++){
        media += notas[x];
    }

    mensajeMedia.innerText = media/notas.length;
}

function notaMasAlta(){
    let notaAlta = 0;
    let x = 0;
    while(x<5){
        if(notas[x] > notaAlta){
            notaAlta = notas[x];
        }
        x++;
    }

    let mensajeNota = document.getElementById("nota");
    mensajeNota.innerText = notaAlta;
}

function mostrarSuspenso(){
    let mensajeSuspenso = document.getElementById("suspenso");
    let suspenso = false;
    let i = 0;

    do{
        if(notas[i]<5){
            suspenso = true
            mensajeSuspenso.innerText = "SI";
        }
        i++;
    }while(i<5);
    
    if(!suspenso){
        mensajeSuspenso.innerText = "NO";
    }
}