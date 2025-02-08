// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayNombres = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    
    //Si no se ingresa ningun dato en la caja
    if (!nombre || nombre.trim() === "") {

        alert("Debes ingresar un dato");
    
    //Si la informacion ingresada en la caja es un entero
    } else if(!isNaN(nombre)){

        alert("Los datos ingresados no pueden ser valores numericos");
        
    } else {
        arrayNombres.push(nombre);
        console.log(arrayNombres);
    }
    limpiarCaja();
    
}

function sortearAmigo(){
    
}

//Se encarga de borrar o "limpiar "los datos que estan en la caja
function limpiarCaja(){
    let valorCaja = document.querySelector("#amigo");
    valorCaja.value = "";
}