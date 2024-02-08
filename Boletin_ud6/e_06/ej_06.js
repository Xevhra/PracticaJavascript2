/*
A partir del documento HTML proporcionado para este ejercicio, generar el script
necesario para que al pulsar dentro de la tabla, la fila donde se haya hecho click con
el cursor se marcará de amarrillo. Para ello puedes usar la clase “seleccionada”. Al
pulsar en otra fila, la fila marcada anterior recuperará su color original.
*/
let tBody = document.getElementsByTagName("TBODY")[0];
let celdas = document.getElementsByTagName("TD");

for (let celda of celdas) {
  celda.addEventListener("click", pintaFila);
}

function pintaFila(event) {
  for (let fila of tBody.children) {
    fila.classList.remove("seleccionada");
  }
  event.target.parentElement.classList.add("seleccionada");
}
