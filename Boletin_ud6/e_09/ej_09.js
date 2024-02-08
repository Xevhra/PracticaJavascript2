/*
A partir del documento HTML proporcionado para este ejercicio, implemente un
script que genere un código un captcha para el procesamiento de un formulario.
Para ello, al pasar el ratón sobre un texto “Pase el ratón por aquí para ver el código”,
se modificará dicho texto para mostrar un número aleatorio de cuatro cifras. Cuando
el ratón deje de estar sobre el texto volverá al texto original. Por otro lado, habrá un
campo de texto donde se introducirá el último número mostrado. Al enviar el
formulario se comprobará que el número introducido y el último mostrado coinciden,
si coinciden se enviará el formulario, en caso contrario saltará un alert con un
mensaje de error y no se enviará el formulario.
*/

document.addEventListener("DOMContentLoaded", generaCaptcha);
document.getElementById("captcha").addEventListener("mouseenter", muestraCaptcha);
document.getElementById("captcha").addEventListener("mouseleave", ocultaCaptcha);
document.getElementsByName("btnLogin")[0].addEventListener("click", compruebaCaptcha);

let numSecreto = 0;

function muestraCaptcha() {
  document.getElementById("code").style.visibility = "";
}

function ocultaCaptcha() {
  document.getElementById("code").style.visibility = "hidden";
}

function generaCaptcha() {
  numSecreto = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  document.getElementById("code").innerHTML = numSecreto;
}

function compruebaCaptcha(event) {
  let numIntroducido = Number(document.getElementById("verify").value.trim());

  if (numIntroducido != numSecreto) {
    alert("NINININININI ¡Pon bien el número! ");
    event.preventDefault();
  }
}
