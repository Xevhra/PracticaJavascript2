/*
4. A partir del documento HTML proporcionado para este ejercicio, generar el script
necesario para que al pulsar en el botón “Crear Tabla” se genere automáticamente
una tabla HTML con tantas filas y columnas como se ha especificado en el
formulario. Dicha tabla deberá ubicarse en la capa con identificador “tabla” y cada
celda deberá estar numerada tal y como se puede ver en la siguiente ilustración. 
*/

document.getElementById("boton").addEventListener("click", crearTabla);

function crearTabla() {
  let tablaPrevia = document.getElementById("tabla");
  if (tablaPrevia.hasChildNodes()) {
    tablaPrevia.removeChild(tablaPrevia.firstChild);
  }

  let numFilas = Number(formulario.filas.value);
  let numColumnas = Number(formulario.columnas.value);
  let contador = 1;

  let nuevaTabla = document.createElement("table");

  for (let fila = 0; fila < numFilas; fila++) {
    let nuevaFila = nuevaTabla.appendChild(document.createElement("tr"));
    for (let columna = 0; columna < numColumnas; columna++) {
      let nuevaColumna = nuevaFila.appendChild(document.createElement("td"));
      nuevaColumna.appendChild(document.createTextNode(contador));
      contador++;
    }
  }

  document.getElementById("tabla").appendChild(nuevaTabla);
}
