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

//load cart
let loadCart = function () {
    if (localStorage.getItem('cartStorage')) {
        cartStorage = JSON.parse(localStorage.getItem('cartStorage'));
        return cartStorage
    }
}

const cart = loadCart(); // carrito vacio


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
    //return el carrito 
    return cart;
};


//funcion para la cantidad
function Qty() {
    let qty = 0;
    for (let i = 0; i < cart.length; i++) {
        qty += cart[i].qty;
    }
    return qty
}

//MUESTRA EL CARRITO EN EL MODAL
function muestraCarrito() {    
    cartQty.innerHTML = `tiene ${Qty()} items en su carrito`; // llama la funcion de la cantidad Y LA APLICA SOBRE LA VAR DEFINIDA EN DOM

    let itemGlosa = "";

    for (let i = 0; i < cart.length; i++) { //recorro array
        itemGlosa += `<li>${cart[i].nombre}
        $${cart[i].precio} x ${cart[i].qty} = 
        $${cart[i].precio* cart[i].qty} </li>` //agrega el elemento html al modal de carrito
    }
    itemList.innerHTML = itemGlosa;
    subTotal.innerHTML = `su total es $${Total()} pesos`; //subtotal del carrito

};

//subfuncion locl storage

function LStorage(item) {
    let cartStorage = []
    item.forEach(element => {
        cartStorage.push({
            nombre: element.nombre,
            precio: element.precio,
            qty: element.qty
        })
        localStorage.setItem('cartStorage', JSON.stringify(cartStorage))
    });

}


//SUB-funcion total
function Total() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].precio * cart[i].qty;
    }
    return total
}