const comerciales = ["Carmen Gómez", "Lucía Gil", "Andrés Martínez", "Antonio Salinas"];
const clientes = [
  [
    "Alimentación Daniel",
    "Cash El Puerto",
    "Ultramarinos Claudia",
    "Supermercado Nazareno",
    "Alimentación Guzmán",
    "Supermercado Superprecio",
    "Kiosko La Espera",
    "M&B Alimentación",
    "Ultramarinos Vistabella",
  ],
  [
    "Ultramarinos La Delicia",
    "Supermercado La Esquinita",
    "Alimentación Gómez",
    "Supermercado El Veloz",
    "Kiosko 24h Desavío",
    "Tienda La Manchega",
    "Ultramarinos Tajo",
    "Alimentación Víctor",
  ],
  [
    "Alimentación Millán",
    "Supermercado La Guinda",
    "Kiosko Callejón",
    "Tienda Cantero",
    "Ultramarinos Mérida",
    "Alimentación Moreno",
    "Cash El Hostelero",
  ],
  [
    "Kiosko La Lumbre",
    "Tienda Abad",
    "Ultramarinos Hernández",
    "Alimentación Cervantes",
    "Cash El Panal",
    "CyR Alimentación",
    "Supermercado Los Mosqueteros",
    "Alimentación Carpanta",
    "Supermercado El Percebe",
  ],
];
const categorias = ["Aceite", "Encurtidos", "Salsas"];



document.addEventListener("DOMContentLoaded", cargarDatos);
document.getElementsByName("comerciales")[0].addEventListener("change", seleccionarCliente)
const gestor = new Gestor()

gestor.categorias = categorias;
gestor.comerciales= comerciales;

console.log(gestor);



function cargarDatos() {
  // Creamos el objeto gestor y lo instanciamos
  for (let com = 0; com < gestor.comerciales.length;com++) {
    gestor.clientes[com] = [];
    for (let cli = 0; cli < clientes[com].length; cli++) {
      let cliente = new Cliente(clientes[com][cli]);
      gestor.clientes[com].push(cliente);
      
    } 
  }

  // Añadimos las categorias
  console.log(categorias);
  
  for (let cat = 0; cat < gestor.categorias.length; cat++) {
    console.log(categorias);
    gestor.categorias[cat] = []  
    gestor.categorias[cat].push(categorias[cat]);
  }

  // Cargamos los comerciales en el select

  let selectComerciales = document.getElementsByName("comerciales")[0];
  for (let comercial of gestor.comerciales){
    opcion = document.createElement('option');
    opcion.value = comercial;
    opcion.append(document.createTextNode(comercial))
    selectComerciales.append(opcion)
  }

  let formComercial = document.getElementById("frmComercial");
  for(let cli = 0; cli < gestor.clientes[0].length; cli++){
    let cliente = gestor.clientes[0][cli];
    gestor.clienteActual = gestor.clientes[0].indexOf(cliente);
    let divCliente = document.createElement('div');
    divCliente.classList.add('cliente');
    divCliente.classList.add('pagado');
    divCliente.addEventListener('click', seleccionarCliente);
    divCliente.innerHTML = cliente.nombre;
    formComercial.after(divCliente);
  }  


  // Cargamos las categorias en el select
  console.log('Hola Piero');
  let selectCategorias = document.getElementsByName("categorias")[0];
  for (let categoria of gestor.categorias){
    opcionCategoria = document.createElement('option');
    opcionCategoria.value = categoria;
    opcionCategoria.append(document.createTextNode(categoria))
    selectCategorias.append(opcionCategoria);
  }
}

function seleccionarCliente () {
  let comercialSeleccionado = document.getElementsByName("comerciales")[0].value;
  gestor.comercialActual = gestor.comerciales.indexOf(comercialSeleccionado);
  
  actualizaDatos();
}


function actualizaDatos() {
    borrarClientes();
    console.log(('Hola Piero'));
    let clientes = document.getElementById("clientes");
    let clientesActuales = gestor.clientes[gestor.comercialActual];
    console.log(gestor.comercialActual);
        for (let cli = 0; cli < clientesActuales.length; cli++) {
            console.log('Adios Piero');
            let cliente = clientesActuales[cli];
            let divCliente = document.createElement('div');
            divCliente.classList.add('cliente');
            divCliente.classList.add('pagado');
            divCliente.addEventListener('click', seleccionarCliente);
            divCliente.innerHTML = cliente.nombre;
            console.log(divCliente.innerHTML);
            clientes.appendChild(divCliente);
        }
    
}


function borrarClientes() {
  let divsABorrar = document.querySelectorAll('.cliente');
  for (let div of divsABorrar) {
    div.remove();
  }
}




