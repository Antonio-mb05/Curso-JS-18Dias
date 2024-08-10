let empleados = [];

function Empleado(dni, nombre, apellidos, fechaNacimiento, cargo){
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.cargo = cargo;
}

function guardarEmpleado(){
    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let cargo = document.getElementById("cargo").value;

    let empleado = new Empleado(dni,nombre,apellidos,fechaNacimiento,cargo);

    empleados.push(empleado);
    alert("Empleado ha sido Agregado");
    limpiarCampos();
}

function mostrarEmpleados(){
    let mensaje = "";
    for(let empleado of empleados){
        for(let dato in empleado){
            mensaje += dato + ": " + empleado[dato] + ", ";
        }
        mensaje += "\n";
    }

    alert(mensaje)
}

function limpiarCampos(){
    document.getElementById("dni").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("fechaNacimiento").value = "";
    document.getElementById("cargo").value = "";
}