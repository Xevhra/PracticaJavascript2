/*
1. A partir del documento HTML proporcionado para este ejercicio, implementar las
funciones javascript necesarias para recorrer la sección del árbol DOM que
corresponde al div con el identificador capa. Habría que mostrar en la capa resultado
los siguientes datos de cada nodo recorrido:
○ NodeType
○ Nombre de la clase del nodo DOM (propiedad constructor.name)
○ NodeName
○ NodeValue
○ innerHTML
Muy importante, al mostrar la salida no está permitido el uso del atributo innerHTML.
Habrá que construir esa sección del árbol DOM usando los métodos estudiados en
teoría. La información de cada nodo en la salida tendrá que tener un formato como el
siguiente:
-------------------------
NodeType = 1
Nombre de la clase = HTMLUListElement
NodeName = UL
NodeValue = null
innerHTML = <li>Item uno</li> <li>Item dos</li> 
*/

document.addEventListener("DOMContentLoaded", recorreNodos);

function recorreNodos() {
  let listaNodos = document.getElementById("capa").childNodes;
  let resultado = document.createElement("p");
  for (nodo of listaNodos) {
    resultado.appendChild(document.createTextNode("-----------------------------"));
    resultado.appendChild(document.createElement("br"));
    resultado.appendChild(document.createTextNode("NodeType: " + nodo.nodeType));
    resultado.appendChild(document.createElement("br"));
    resultado.appendChild(document.createTextNode("Nombre de la clase: " + nodo.constructor ? nodo.constructor.name : "undefined"));
    resultado.appendChild(document.createElement("br"));
    resultado.appendChild(document.createTextNode("NodeName: " + nodo.nodeName));
    resultado.appendChild(document.createElement("br"));
    resultado.appendChild(document.createTextNode("NodeValue: " + nodo.data));
    resultado.appendChild(document.createElement("br"));
    resultado.appendChild(document.createTextNode("InnerHTML: " + nodo.innerHTML));
    resultado.appendChild(document.createElement("br"));
  }
  document.getElementById("resultado").appendChild(resultado);
}
