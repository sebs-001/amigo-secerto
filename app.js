// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayNombres = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    
    //Si no se ingresa ningun dato
    if (!nombre || nombre.trim() === "") {

        alert("Debes ingresar un dato");
    
    //Si la informacion ingresada es un entero
    } else if(!isNaN(nombre)){

        alert("Los datos ingresados no pueden ser valores numericos");
        
    } else {
        arrayNombres.push(nombre);
        console.log(arrayNombres);
    }
    
}

function sortearAmigo(){

}