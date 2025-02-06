// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayNombres = [];

function agregarAmigo(nombre){
    if (!nombre || nombre.trim() === "") {

        alert("Debes ingresar un dato")

    } else if(!isNaN(nombre)){

        alert("Los datos ingresados no pueden ser valores numericos")
        
    } else {
        arrayNombres.push(prompt(nombre));
    }
    
}

function sortearAmigo(){

}