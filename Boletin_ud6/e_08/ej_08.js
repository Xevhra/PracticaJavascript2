/*
A partir del documento HTML proporcionado para este ejercicio, generar el script
necesario para que al cambiar la opción seleccionada en la lista desplegable se apliquen estilos sobre la capa “texto” de diferentes formas:
    
    ○ Eliminar todos los estilos aplicados: elimina todos los estilos aplicados al texto dejándolo con el formato original que tiene al cargar inicialmente la página.
    
    ○ Cambiando atributo style: usando funciones del DOM cambiar el atributo style para que el texto tenga color azul, un tamaño de 20 píxeles y fuente helvética.

    ○ Asignando clases a objetos: usando funciones DOM asignar la clase “claseEstilo” predefinida en el documento html facilitado.

    ○ Asignado estilos externos al documento: asignar el fichero ej08.css facilitado al atributo href del enlace a las hojas de estilo del documento html
*/

let select = document.getElementsByTagName("select")[0];
select.setAttribute("id", "opciones");

let opciones = document.getElementById("opciones");

opciones.addEventListener("change", function () {
  switch (opciones.value) {
    case "quitarEstilos":
      console.log("Opcion 1");
      eliminaStyle();
      break;
    case "atributoStyle":
      console.log("Opcion 2");
      añadeStyle();
      break;
    case "asignandoClases":
      console.log("Opcion 3");
      asignaClase();
      break;
    case "estilosPagina":
      console.log("Opcion 4");
      enlaceExterno();
      break;
  }
});

function eliminaStyle() {
  document.getElementById("estilo").setAttribute("href", "");
  document.getElementById("texto").classList.remove("claseEstilo");
  document.getElementById("texto").style.color = "";
  document.getElementById("texto").style.fontSize = "";
  document.getElementById("texto").style.fontFamily = "";
}

function añadeStyle() {
  eliminaStyle();
  document.getElementById("texto").style.color = "blue";
  document.getElementById("texto").style.fontSize = "20px";
  document.getElementById("texto").style.fontFamily = "helvética";
}

function asignaClase() {
  eliminaStyle();
  document.getElementById("texto").classList.add("claseEstilo");
}

function enlaceExterno() {
  eliminaStyle();
  document.getElementById("estilo").setAttribute("href", "./ej_08.css");
}
