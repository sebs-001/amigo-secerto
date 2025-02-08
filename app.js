// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayNombres = [];

//Se encarga de agregar nombres a el array "arrayNombres"
function agregarAmigo(){
    let listaAmigos = document.getElementById("listaAmigos");
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
        listaAmigos.innerHTML += nombre + "<br>";
    }
    limpiarCaja();
}



//Se encarga de seleccionar un indice aleatorio del array en el cual esta almacenado un nombre
function sortearAmigo(){

    //Si la lista esta vacia
    if (!arrayNombres || arrayNombres.length === 0) {

        alert("No hay nombres en la lista")
        return;

    } else {
        let selectorLista = document.getElementById("listaAmigos");
        let nombreSorteado = document.getElementById("resultado");
        let indiceNombre = Math.floor(Math.random() * arrayNombres.length);
        let nombreSeleccionado = arrayNombres[indiceNombre];

        nombreSorteado.innerHTML = nombreSeleccionado;
        selectorLista.innerHTML = "";
        document.getElementById("agregarPana").setAttribute("disabled", "true");
        return arrayNombres[indiceNombre];
    }
    
}

//Se encarga de borrar o "limpiar "los datos que estan en la caja
function limpiarCaja(){
    let valorCaja = document.querySelector("#amigo");
    valorCaja.value = "";
}

