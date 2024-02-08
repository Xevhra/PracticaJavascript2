/*
A partir del documento HTML proporcionado para este ejercicio, generar el script
necesario para que al pulsar dentro de la tabla, la fila donde se haya hecho click con
el cursor se desplazará un lugar hacia arriba dentro de la tabla.
*/

// Versión 2.0 con geppetto no funciona bien:

// let filas = document.getElementsByTagName("tr");

// for (let fila of filas) {
//   fila.addEventListener("click", mueveFila);
// }

// function mueveFila(event) {
//   let filaObjetivo = event.currentTarget;
//   let indiceFila = getIndex(filaObjetivo);

//   if (indiceFila > 0) {
//     let tabla = filaObjetivo.parentNode;
//     tabla.insertBefore(filaObjetivo, tabla.childNodes[indiceFila - 1]);
//   }
// }

// function getIndex(element) {
//   let index = 0;
//   while ((element = element.previousElementSibling)) {
//     index++;
//   }
//   return index;
// }

// /*

//primera Version Sin Geppeto

let celdas = document.getElementsByTagName("TD");

for (let celda of celdas) {
  celda.addEventListener("click", mueveFila);
}

function mueveFila(event) {
  let celdaObjetivo = event.target;
  let filaObjetivo = celdaObjetivo.parentElement;
  let filaAnterior = filaObjetivo.previousElementSibling;

  if (filaAnterior != null) {
    filaObjetivo.after(filaAnterior);
  }
}
