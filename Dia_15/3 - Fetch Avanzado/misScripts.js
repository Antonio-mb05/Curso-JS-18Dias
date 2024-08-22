let usuario = "Antonio";
let password = "Contraseña";
let token = "miToken"

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    credentials: "include",
    cache: "only-if-cached",
    redirect: "manual",
    headers: {
        "Authorizarion": "Bearer" + token,
        "Content-Type": "application/json"
    }
})
.then(response => {
    if(response.type === "opaqueredirect"){
        let nuevaUbicacion = response.headers.get("Location");
        console.log("Redirigiendo a :" + nuevaUbicacion)
    }else{
        return response.json();
    }
})
.then(data => console.log(data))
.catch(error => console.error(error));