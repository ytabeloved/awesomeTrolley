//maldito ecommerce




//constructor items para el futuro cuando quiera agregar mas

class Item {
    constructor(nombre, precio, stock, descr, foto, itemNum) {
        this.nombre = nombre.toUppercase();
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
        this.descr = descr;
        this.foto = foto;
        this.itemNum = parseInt(itemNum);
    }

}



//listado productos
const stockTienda = [{
        nombre: "POLERA",
        precio: 1500,
        stock: 10,
        descr: "descripcion prod",
        foto: "/asset/img/polera.jpg",
        itemNum: 1,
    },
    {
        nombre: "GORRO",
        precio: 1500,
        stock: 10,
        descr: "descripcion prod",
        foto: "/asset/img/gorro.jpg",
        itemNum: 2,
    },
    {
        nombre: "VESTIDO",
        precio: 1500,
        stock: 10,
        descr: "descripcion prod",
        foto: "/asset/img/vestido.jpg",
        itemNum: 3,
    },
    {
        nombre: "DISFRAZ OSITO",
        precio: 1500,
        stock: 0,
        descr: "descripcion prod",
        foto: "/asset/img/osito.jpg",
        itemNum: 4,
    },
    {
        nombre: "SHORT",
        precio: 1500,
        stock: 10,
        descr: "descripcion prod",
        foto: "/asset/img/shorts.jpg",
        itemNum: 5,
    },
    {
        nombre: "ZAPATOS",
        precio: 1500,
        stock: 10,
        descr: "descripcion prod",
        foto: "/asset/img/zapatos.jpg",
        itemNum: 5,
    }
];


//REPLANTEO CARRITO DE COMPRA:
//1)BOTON AGREGAR DEBE TOMAR NOMBRE QTY Y PRECIO Y ENVIAR A CARRITO
//2)CADA VEZ QUE APRETE EL BOTON DESPUES SOLO DEBE INCREMENTAR LA QTY
//BOTON DE ITEM CON STOCK EN CERO ARROJAR MENSAJE DE QUE NO HAY STOCK
//ICONO OSITO ABRE MODAL CON CARRITO
//CARRITO DEBE ESTAR EN FORMATO TABLA
//CARRITO DEBE TOMAR NOMBRE, PRECIO  Y CANTIDAD Y ABAJO MOSTRAR SUBTOTAL
//CARRITO DEBE TENER BOTON REMOVE AL LADO DE CADA ITEM
//BOTON REMOVE DEBE REMOVER ITEMS DE CARRITO
//CARRITO DEBE TENER BOTON COMPRAR
//CARRITO DEBE QUEDAR ALMACENADO EN EL STORAGE LOCAL.


/*PREPARACION PARA PRE ENTREGA y desafio 9*/

const cart = []; // carrito vacio

//funcion agregar y mostrar carrito

function agregaCarrito(nombre, precio) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].nombre === nombre) {
            cart[i].qty += 1;
            return
        }
    }
    const item = {
        nombre: nombre,
        precio: precio,
        qty: 1
    } //arma un item basado en lso obj principales para usar para el carrito
    cart.push(item)

};

//funcion para la cantidad
function Qty() {
    let qty = 0;
    for (let i = 0; i < cart.length; i++) {
        qty += cart[i].qty;
    }
    return qty
}


function muestraCarrito() {

    console.log(`tiene ${Qty()} items en su carrito`); // llama la funcion de la cantidad
    for (let i = 0; i < cart.length; i++) { //recorro array
        console.log(`- ${cart[i].nombre} $${cart[i].precio} x ${cart[i].qty}`) //mensaje que despues creara un html
    }

    console.log(`su total es $${Total()} pesos`)
};


//funcion total
function Total() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].precio * cart[i].qty;
    }
    return total
}

agregaCarrito('vestido', 3500)
agregaCarrito('vestido', 3500);
agregaCarrito('gorro', 3500);
agregaCarrito('gorro', 3500);
muestraCarrito();