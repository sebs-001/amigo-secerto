# Juego del amigo secreto

Primer desafio de Alura LATAM Oracle Next Generations. Este proyecto consta en que digitaras varios nombres dentro de una caja de texto los cuales se almacernaran en una lista. Luego se seleccionara uno de estos nombres de manera aleatoria y el seleccionado sera tu amigo secreto!

# Funciones

- **Agregar amigos**: Permite al usuario ingresar nombres de amigos en una caja de texto y agregarlos a una lista.
- **Sortear amigos**: Selecciona un nombre al azar de la lista de amigos agregados.
- **Validaciones**:
  - No permite agregar nombres vacios.
  - No permite agregar valores numericos.
  - Muestra alertas en caso de errores.
- **Limpiar caja**: Después de agregar un nombre, la caja de texto se limpia automaticamente.

# Estructura del codigo

- **arrayNombres**: Un array que almacena los nombres de los amigos.
- **agregarAmigo()**: Función que agrega nombres al array y los muestra en la lista.
- **sortearAmigo()**: Función que selecciona un nombre al azar del array y lo muestra como resultado.
- **limpiarCaja()**: Función que limpia la caja de texto después de agregar un nombre.

## Como utilizarlo?

1. Clona este repositorio o descarga los archivos.
2. Abre el archivo index.html en tu explorador.
3. Ingresa nombres de amigos en la caja de texto y haz click en "Agregar".
4. Cuando hayas agregado varios nombres, haz click en "Sortear" para seleccionar uno al azar.

## Informacion a tener en cuenta

- **Nombre vacio**: Si no ingresas ningun dato dentro de la caja saldra un mensaje indicando que: "Debes ingresar un dato".
- **Valor numerico**: Si ingresas un valor numerico saldra un mensaje indicando que : "Los datos ingresados no pueden ser valores numericos".
- **Lista vacia**: Si tratas de sortear un amigo y aun no as agregado ninguno a la lista saldra: "No hay nombres en la lista".

## Posibles mejoras

- Posibildad de eliminar nombres de la lista.
- Agregar un boton que permita reiniciar el juego.
- Impedir al acceso de un nombre si este lleva un valor numerico.

## Licencia

Este proyecto está bajo la licencia MIT.

