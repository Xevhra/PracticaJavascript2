/*
3. A partir del documento HTML proporcionado para este ejercicio, asignar los
manejadores de eventos necesarios a los botones para que al pulsar el izquierdo se
coloreen de azul las celdas de la diagonal principal de la tabla, al pulsar el del centro
se coloreen de rojo las de la diagonal secundaria y al pulsar el tercero se devuelve la
tabla a su estado inicial.
*/
document.getElementById("principal").addEventListener("click", pintarAzul);
document.getElementById("secundaria").addEventListener("click", pintarRojo);
document.getElementById("horizontal").addEventListener("click", pintarVerde);
document.getElementById("vertical").addEventListener("click", pintarAmarillo);
document.getElementById("InvocarFascismo").addEventListener("click", fascismoOn);
document.getElementById("vivaLaRepublica").addEventListener("click", vivaLaRepublica);
document.getElementById("resetear").addEventListener("click", resetear);

function pintarAzul() {
  let tbody = document.getElementsByTagName("table")[0].children;
  let filas = tbody[0].children;
  for (let i = 0; i < filas.length; i++) {
    let columnas = filas[i].children;
    for (let j = 0; j < columnas.length; j++) {
      if (i == j) {
        columnas[j].style.backgroundColor = "blue";
        columnas[j].style.color = "white";
      }
    }
  }
}

function pintarRojo() {
  let tbody = document.getElementsByTagName("table")[0].children;
  let filas = tbody[0].children;
  for (let i = 0; i < filas.length; i++) {
    let columnas = filas[i].children;
    for (let j = 0; j < columnas.length; j++) {
      if (i + j == columnas.length - 1) {
        columnas[j].style.backgroundColor = "red";
        columnas[j].style.color = "white";
      }
    }
  }
}

function pintarVerde() {
  let tbody = document.getElementsByTagName("table")[0].children;
  let filas = tbody[0].children;
  for (let i = 0; i < filas.length; i++) {
    let columnas = filas[i].children;
    for (let j = 0; j < columnas.length; j++) {
      if (j == 2) {
        columnas[j].style.backgroundColor = "green";
        columnas[j].style.color = "white";
      }
    }
  }
}

function vivaLaRepublica() {
  resetear();
  let tbody = document.getElementsByTagName("table")[0].children;
  let filas = tbody[0].children;
  for (let i = 0; i < filas.length; i++) {
    let columnas = filas[i].children;
    for (let j = 0; j < columnas.length; j++) {
      if (i == 0) {
        columnas[j].style.backgroundColor = "red";
      }
      if (i == 1 || i == 2|| i == 3) {
        columnas[j].style.backgroundColor = "yellow";
      }
      if (i == 4) {
        columnas[j].style.backgroundColor = "purple";
      }
    }
  }
}

function fascismoOn() {
  resetear();
  let tbody = document.getElementsByTagName("table")[0].children;
  let filas = tbody[0].children;
  for (let i = 0; i < filas.length; i++) {
    let columnas = filas[i].children;
    for (let j = 0; j < columnas.length; j++) {
      if (i == 0 || i == 4) {
        columnas[j].style.backgroundColor = "red";
      }
      if (i == 1 || i == 2 || i == 3) {
        columnas[j].style.backgroundColor = "yellow";
      }
    }
  }
}

function pintarAmarillo() {
  let tbody = document.getElementsByTagName("table")[0].children;
  let filas = tbody[0].children;
  for (let i = 0; i < filas.length; i++) {
    let columnas = filas[i].children;
    for (let j = 0; j < columnas.length; j++) {
      if (i == 2) {
        columnas[j].style.backgroundColor = "yellow";
      }
    }
  }
}

function resetear() {
  let tbody = document.getElementsByTagName("table")[0].children;

  let filas = tbody[0].children;

  for (let fila of filas) {
    let columnas = fila.children;
    for (let columna of columnas) {
      columna.style.backgroundColor = "";
      columna.style.color = "black";
      console.log(columna);
    }
  }
}
