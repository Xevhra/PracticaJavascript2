/* El modelo de datos tendrá la siguientes especificaciones con la explicación de atributos y
métodos más significativos:
1. Clase Producto. Cada objeto de esta clase representará un producto distinto que le
ofrecemos a los clientes.
a. idProducto: entero que identifica de forma única al producto.
b. nombreProducto: cadena de texto con el nombre del producto.
c. precioUnidad: número real con el precio de una unidad del producto.
d. idCategoria: entero con el índice de la categoría del producto. */

class Producto {
    _idProducto;
    _nombreProducto;
    _precioUnidad;
    _idCategoria

    constructor(idProducto, nombreProducto, precioUnidad, idCategoria) {
        this._idProducto = idProducto;
        this._nombreProducto = nombreProducto;
        this._precioUnidad = precioUnidad;
        this._idCategoria = idCategoria;
    }

    get nombreProducto( ) {
        return this._nombreProducto;
    }

    set nombreProducto(value) {
        this._nombreProducto = value;
    }

    get precioUnidad( ) {
        return this._precioUnidad;
    }

    set precioUnidad(value) {
        this._precioUnidad = value;
    }

    get idCategoria( ) {
        return this._idCategoria;
    }

    set idCategoria(value) {
        this._idCategoria = value;
    }

}




/* 2. Clase Catálogo. Con un objeto de esta clase se representa el conjunto de
productos que le ofrecemos a los clientes.
a. productos: array de objetos de la clase Producto.
b. addProducto(idProducto, nombreProducto, precioUnidad, idCategoria).
Método que permite la inserción de un nuevo producto en el catálogo. */

class Catalogo {
    _productos;

    get productos() {
        return this._productos;
    }
    

    constructor () {
        this._productos = [];
    }

    addProducto(idProducto, nombreProducto, precioUnidad, idCategoria) {
        let productoAAñadir = new Producto(idProducto, nombreProducto, precioUnidad, idCategoria)
        this.productos.push(productoAAñadir);
    }
}


/* 3. Clase LineaPedido. Cada objeto de esta clase representará una línea del pedido de
un determinado cliente.
a. unidades: entero con el número de unidades solicitadas del producto
representado en el atributo siguiente.
b. idProducto: entero con el identificador del producto solicitado. */

class LineaPedido {
    _unidades;
    _idProducto;

    get unidades() {
        return this._unidades;
    }

    set unidades(value) {
        this._unidades = value;
    }
    get idProducto() {
        return this._idProducto;
    }
    set idProducto(value) {
        this._idProducto = value;
    }

    constructor (unidades, idProducto) {
        this._unidades = unidades;
        this._idProducto = idProducto;
    }

}


/* 4. Clase Cliente. Cada objeto de esta clase representará un cliente de la empresa.
a. nombre: cadena de texto con el nombre del cliente.
b. cuentaAbierta: booleano que indica si el cliente tiene una pedido en curso
que aún no ha finalizado. Del valor de este atributo depende que el cliente
se vea en rojo (true) o azul (false) en el primer panel. */


class Cliente {
    _nombre;
    _cuentaAbierta;

   

    constructor (nombre, cuentaAbierta) {
        this._nombre = nombre;
        this._cuentaAbierta = cuentaAbierta;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }

    get cuentaAbierta() {
        return this._cuentaAbierta;
    }
    set cuentaAbierta(value) {
        this._cuentaAbierta = value;
    }
}


/* 5. Clase Gestor. Se creará un objeto de esta clase que servirá para la gestión integral
de la aplicación, permitiendo cambiar entre las carteras de clientes de los diferentes
comerciales, así como visualizar los pedidos de los diferentes clientes de cada
comercial.
a. categorias: array de String con los nombres de las categorías de productos
que ofrece la empresa. El atributo idCategoria de la clase Producto
coincidirá con el índice de la posición en este array que ocupe la categoría a
la que pertenezca.
b. comerciales: array de String con los nombres de los comerciales de la
empresa. Los diferentes comerciales se indexarán según la posición que
determine este atributo.
c. clientes: array bidimensional de objetos de la clase Cliente. La primera
dimensión determinará el índice del comercial al que pertenece el array de
objetos de la clase Cliente de la segunda dimensión, que representa la
cartera de clientes de ese comercial.
d. comercialActual: entero que representa el índice del comercial seleccionado
por el usuario en el panel de clientes. Este entero indica la posición de ese
comercial dentro del array del segundo atributo de esta clase.
e. clienteActual: entero que representa el índice del cliente seleccionado por el
usuario dentro de la cartera de clientes del comercial actual. Es decir, para
obtener el objeto cliente actual, se deberá acceder al array bidimensional de
clientes seleccionando en la primera dimensión el comercial actual y en la
segunda el cliente actual.
f. pedidos: array tridimensional que servirá para almacenar las líneas de
pedidos de los diferentes clientes. La primera dimensión determinará el
índice del comercial y la segunda el índice del cliente. La tercera dimensión
será un array de objetos de la clase LineaPedido, al que iremos añadiendo
nuevos objetos conforme el usuario vaya añadiendo productos al pedido de
un determinado cliente. */

class Gestor {
    _categorias;
    _comerciales;
    _clientes;
    _comercialActual;
    _clienteActual;
    _pedidos;

    
    
    constructor(comercialActual, clienteActual) {
        this._categorias = [];
        this._comerciales = [];
        this._clientes = [[], []];
        this._comercialActual = comercialActual;
        this._clienteActual = clienteActual;
        this._pedidos = [[], [], []]
    }

    get categorias() {
        return this._categorias;
    }

    set categorias(value) {
        this._categorias = value;
    }

    get comerciales() {
        return this._comerciales;
    }

    set comerciales(value) {
        this._comerciales = value;
    }

    get clientes() {
        return this._clientes;
    }

    set clientes(value) {
        this._clientes = value;
    }

    get comercialActual() {
        return this._comercialActual;
    }
    set comercialActual(value) {
        this._comercialActual = value;
    }

    get clienteActual() {
        return this._clienteActual;
    }
    set clienteActual(value) {
        this._clienteActual = value;
    }

    set pedidos(value) {
        this._pedidos = value;
    }

    get pedidos() {
        return this._pedidos;
    }
}