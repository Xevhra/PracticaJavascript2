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
document.getElementsByName("categorias")[0].addEventListener("change", seleccionarCategoria)
document.getElementById("teclado").addEventListener("click", teclado)




const gestor = new Gestor()
const catalogo = new Catalogo()

gestor.categorias = categorias;
gestor.comerciales= comerciales;




function cargarDatos() {
  // Añadimos los productos
  catalogo.addProducto(1, "Aceite Oliva Virgen Extra 1l (Caja 20)", 178.15, 0);
  catalogo.addProducto(
    2,
    "Aceite Oliva Virgen Extra 700ml (Caja 30)",
    208.5,
    0
  );
  catalogo.addProducto(3, "Aceite Oliva Virgen Extra 5l (Caja 6)", 247.5, 0);
  catalogo.addProducto(4, "Aceite Oliva 1l (Caja 20)", 109.25, 0);
  catalogo.addProducto(5, "Aceituna Gordal 340gr (Caja de 50)", 180.75, 1);
  catalogo.addProducto(
    6,
    "Aceituna Gordal deshuesada 350gr (Caja de 50)",
    205.45,
    1
  );
  catalogo.addProducto(7, "Aceituna Manzanilla 250 gr (Caja de 50)", 124.85, 1);
  catalogo.addProducto(
    8,
    "Aceituna Manzanilla deshuesada 250 gr (Caja de 50)",
    141.35,
    1
  );
  catalogo.addProducto(9, "Aceituna Negra 350gr (Caja de 50)", 87.5, 1);
  catalogo.addProducto(
    10,
    "Aceituna Negra deshuesada 350gr (Caja de 50)",
    99.35,
    1
  );
  catalogo.addProducto(11, "Mayonesa 350gr (Caja de 50)", 124.45, 2);
  catalogo.addProducto(12, "Mayonesa 1Kg (Caja de 30)", 178.65, 2);
  catalogo.addProducto(13, "Salsa Cocktail 350gr (Caja de 50)", 99.65, 2);
  catalogo.addProducto(14, "Salsa Gaucha 350gr (Caja de 50)", 124.85, 2);
  catalogo.addProducto(15, "Salsa Alioli 350 gr (Caja de 50)", 113.75, 2);
  catalogo.addProducto(16, "Salsa Barbacoa 500gr (Caja de 30)", 67.5, 2);
  // Creamos el objeto gestor y lo instanciamos
  for (let com = 0; com < gestor.comerciales.length;com++) {
    gestor.clientes[com] = [];
    for (let cli = 0; cli < clientes[com].length; cli++) {
      let cliente = new Cliente(clientes[com][cli]);
      gestor.clientes[com].push(cliente);
      
    } 
  }



  // Aqui asigno el array de categorias a gestor.categorias para luego poder cargarlas en el combobox
  
  gestor.categorias = categorias;

  // Cargamos los comerciales en el select

  let selectComerciales = document.getElementsByName("comerciales")[0];
  for (let comercial of gestor.comerciales){
    let opcion = document.createElement('option');
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
    divCliente.addEventListener('click', realizaPedido);
    divCliente.innerHTML = cliente.nombre;
    formComercial.after(divCliente);
  }  


  // Cargamos las categorias y los productos en los select
  let selectCategorias = document.getElementsByName("categorias")[0];
  let selectProducto = document.getElementsByName("productos")[0]
      for (let categoria of gestor.categorias){
        let opcionCategoria = document.createElement('option');
        opcionCategoria.value = categoria;
        opcionCategoria.setAttribute("value", gestor.categorias.indexOf(categoria))
        opcionSeleccionada = document.getElementsByName("categorias")[0].value;
        
        opcionCategoria.append(document.createTextNode(categoria))
        selectCategorias.append(opcionCategoria);
      }
// Añadimos los productos
for (producto of catalogo.productos) {
  if (producto.idCategoria == opcionSeleccionada) {
    opcionProducto = document.createElement('option');
    opcionProducto.value = producto;
    opcionProducto.setAttribute("value", catalogo.productos.indexOf(producto));
    opcionProducSeleccionada = document.getElementsByName("productos")[0].value;
    opcionProducto.append(document.createTextNode(producto.nombreProducto));
    selectProducto.append(opcionProducto);
    console.log(opcionProducto); 
  }
}


}

function seleccionarCliente () {
  let comercialSeleccionado = document.getElementsByName("comerciales")[0].value;
  gestor.comercialActual = gestor.comerciales.indexOf(comercialSeleccionado);
  actualizaDatos();
}


function seleccionarCategoria () {
  actualizaProductos();
}


function actualizaDatos() {
    borrarClientes();
    let clientes = document.getElementById("clientes");
    let clientesActuales = gestor.clientes[gestor.comercialActual];
        for (let cli = 0; cli < clientesActuales.length; cli++) {
            
            let cliente = clientesActuales[cli];
            let divCliente = document.createElement('div');
            divCliente.classList.add('cliente');
            divCliente.classList.add('pagado');
            divCliente.addEventListener('click', seleccionarCliente);
            divCliente.addEventListener('click', realizaPedido);
            divCliente.innerHTML = cliente.nombre;
            clientes.appendChild(divCliente);
        }
}

function actualizaProductos() {
  borrarOptions();
  let selectProducto = document.getElementsByName("productos")[0]
  let categorias = document.getElementsByName("categorias")[0];
  let categoriaActual = categorias.value;
  switch (categoriaActual) {
    case '0':
      
      for (producto of catalogo.productos) {
      if (producto.idCategoria == categoriaActual) {
        opcionProducto = document.createElement('option');
        opcionProducto.value = producto;
        opcionProducto.setAttribute("value", catalogo.productos.indexOf(producto));

        opcionProducSeleccionada = document.getElementsByName("productos")[0].value;
        
        opcionProducto.append(document.createTextNode(producto.nombreProducto));
        selectProducto.append(opcionProducto); 
      }
}
      break;

    case '1':
      
      for (producto of catalogo.productos) {
        if (producto.idCategoria == categoriaActual) {
          opcionProducto = document.createElement('option');
          opcionProducto.value = producto;
          opcionProducto.setAttribute("value", catalogo.productos.indexOf(producto));
          opcionProducSeleccionada = document.getElementsByName("productos")[0].value;
  
          
          opcionProducto.append(document.createTextNode(producto.nombreProducto));
          selectProducto.append(opcionProducto); 
        }
      }

      break;
      
    case '2':
      
      for (producto of catalogo.productos) {
      if (producto.idCategoria == categoriaActual) {
        opcionProducto = document.createElement('option');
        opcionProducto.value = producto;
        opcionProducSeleccionada = document.getElementsByName("productos")[0].value;
        opcionProducto.append(document.createTextNode(producto.nombreProducto));
        selectProducto.append(opcionProducto); 
      }
    }
      break;  
  }

}

function borrarOptions() {
  let optionsABorrar = document.querySelectorAll('[name="productos"] option');
  
  for (let opcion of optionsABorrar){
    
    opcion.remove();
  }
}


function borrarClientes() {
  let divsABorrar = document.querySelectorAll('.cliente');
  for (let div of divsABorrar) {
    div.remove();
  }
}


// Funciones de pedidos


let pedido = document.getElementById("pedido");
let objetivo;
let clienteSeleccionado;
let productoSeleccionado = document.getElementsByName('productos')[0];
 


console.log(catalogo);


function teclado(event) {
  objetivo = event.target;
  
  console.log(productoSeleccionado);
  let divLineaPedido = document.createElement('div');
  divLineaPedido.innerHTML ="<h3>"+productoSeleccionado.value+"</h3>"
  
  let LPedido = new LineaPedido(objetivo.value, productoSeleccionado.value)
  console.log(LPedido);
  console.log(productoSeleccionado.value);
  
  let tabla = document.createElement("table");
  

  let encabezado = tabla.createTHead();
  let encabezadoFila = encabezado.insertRow();
  encabezadoFila.innerHTML = "<th>Modificar</th><th>UDS</th><th>ID</th><th>Nombre Producto</th><th>Precio</th>";
  console.log(encabezadoFila);

  // pedido.lastChild.append(divLineaPedido);
  pedido.lastChild.append(tabla);

  // Acceder al cuerpo de la tabla
  
  // Crear una nueva fila
  let fila = tabla.insertRow();

  // Agregar celdas a la fila
  let celdaModificador = fila.insertCell(0);
  let celdaUnidades = fila.insertCell(1);
  let celdaIdProducto = fila.insertCell(2);
  let celdaNombreProducto = fila.insertCell(3);
  let celdaTotal = fila.insertCell(4);

  // Asignar los valores a las celdas
  celdaIdProducto.innerHTML = LPedido.idProducto;  // Ajusta esto según la propiedad real del objeto
  celdaUnidades.innerHTML = LPedido.unidades;  // Ajusta esto según la propiedad real del objeto
  celdaNombreProducto.innerHTML = gestor.catalogo.nombre;  // Ajusta esto según la propiedad real del objeto

  console.log(celdaIdProducto);
  console.log(celdaUnidades);
  console.log(celdaNombreProducto);
  
}




function realizaPedido(event){
  borrarDivPedido()
  clienteSeleccionado = event.target;
  let divPedido = document.createElement('div');
  
  divPedido.setAttribute("name", "titulo");
  divPedido.innerHTML = "<h2>"+clienteSeleccionado.innerHTML+"</h2>"
  pedido.append(divPedido);
  
}

function borrarDivPedido() {
 let tituloABorrar = document.querySelectorAll('[name="titulo"]');
 for (let titulo of tituloABorrar) {
  titulo.remove();
 }
}







