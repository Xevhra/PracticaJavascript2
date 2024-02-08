/*
2. A partir del documento HTML proporcionado para este ejercicio, implementar las
funciones javascript necesarias para recorrer la sección del árbol DOM que
corresponde al div con el identificador capa. Habría que mostrar en la capa resultado
los siguientes datos de cada elemento recorrido:
○ NodeType
○ Nombre de la clase del elemento DOM (propiedad constructor.name)
○ NodeName
○ NodeValue
○ innerHTML
Muy importante, al mostrar la salida no está permitido el uso del atributo innerHTML.
Habrá que construir esa sección del árbol DOM usando los métodos estudiados en
teoría. La información de cada elemento en la salida tendrá que tener un formato
como el siguiente:
-------------------------
NodeType = 1
Nombre de la clase = HTMLUListElement
NodeName = UL
NodeValue = null
innerHTML = <li>Item uno</li> <li>Item dos</li>
*/

document.addEventListener("DOMContentLoaded", recorreElementos);

function recorreElementos() {
  let listaElementos = document.getElementById("capa").children;
  console.log(listaElementos);
  let resultado = document.createElement("p");
  for (elemento of listaElementos) {
    resultado.appendChild(document.createTextNode("-----------------------------"));
    resultado.appendChild(document.createElement("br"));
    resultado.appendChild(document.createTextNode("NodeType: " + elemento.nodeType));
    resultado.appendChild(document.createElement("br"));
    resultado.appendChild(document.createTextNode("Nombre de la clase: " + elemento.constructor.name));
    resultado.appendChild(document.createElement("br"));
    resultado.appendChild(document.createTextNode("NodeName: " + elemento.tagName));
    resultado.appendChild(document.createElement("br"));
    resultado.appendChild(document.createTextNode("NodeValue: " + elemento.data));
    resultado.appendChild(document.createElement("br"));
    resultado.appendChild(document.createTextNode("InnerHTML: " + elemento.innerHTML));
    resultado.appendChild(document.createElement("br"));
  }
  document.getElementById("resultado").appendChild(resultado);
}
