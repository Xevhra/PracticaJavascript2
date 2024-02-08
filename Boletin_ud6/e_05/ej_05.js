/*
A partir del documento HTML proporcionado para este ejercicio, generar el script necesario 
para que al pulsar en el botón “Generar Tablero” se genere automáticamente un tablero de 
ajedrez. Cada casilla deberá estar numerada por su columna y fila tal y como se puede ver 
en la siguiente ilustración. El tablero deberá ubicarse en la capa con identificador “tablero”.
*/
document.getElementById("boton").addEventListener("click", creaTablero);

function creaTablero() {
  let contador = 8;
  let arrayLetras = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let nuevaTablero = document.createElement("table");

  for (let fila = 0; fila < 8; fila++) {
    let nuevaFila = nuevaTablero.appendChild(document.createElement("tr"));
    console.log(nuevaFila.rowIndex);
    for (let columna = 0; columna < 8; columna++) {
      let nuevaColumna = nuevaFila.appendChild(document.createElement("td"));
      nuevaColumna.appendChild(document.createTextNode(`${arrayLetras[columna]}${contador}`));
      /* 
      ¿Cómo funciona? 
      Si el resto de la suma (fila + columna) es 0:
       - pinta el fondo blanco y la letra a negro.
      Si no es 0:  
       - pinta el fondo negro y la letra a blanco. 
       */
      nuevaColumna.style.backgroundColor = (fila + columna) % 2 == 0 ? "white" : "black";
      nuevaColumna.style.color = (fila + columna) % 2 == 0 ? "black" : "white";
    }
    contador--;
  }

  document.getElementById("tablero").appendChild(nuevaTablero);
}
/*       
nuevaColumna.style.backgroundColor = "black";
nuevaColumna.style.color = "white"; 
*/
