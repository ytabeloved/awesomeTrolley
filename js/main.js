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
//1)BOTON AGREGAR DEBE TOMAR NOMBRE QTY Y PRECIO Y ENVIAR A CARRITO CHECK
//2)CADA VEZ QUE APRETE EL BOTON DESPUES SOLO DEBE INCREMENTAR LA QTY CHECK
//BOTON DE ITEM CON STOCK EN CERO ARROJAR MENSAJE DE QUE NO HAY STOCK 
//ICONO OSITO ABRE MODAL CON CARRITO CHECK
//CARRITO DEBE ESTAR EN FORMATO TABLA
//CARRITO DEBE TOMAR NOMBRE, PRECIO  Y CANTIDAD Y ABAJO MOSTRAR SUBTOTAL CHECK
//CARRITO DEBE TENER BOTON REMOVE AL LADO DE CADA ITEM CHECK
//BOTON REMOVE DEBE REMOVER ITEMS DE CARRITO CHECK
//CARRITO DEBE TENER BOTON COMPRAR
//CARRITO DEBE QUEDAR ALMACENADO EN EL STORAGE LOCAL. CHECK


/*PREPARACION PARA PRE ENTREGA y desafio 9*/

//load cart de locale storage
let loadCart = function () {
    if (localStorage.getItem('cartStorage')) { //SI EXISTE UN LOCAL STORAGE ENTONCES
        cartStorage = JSON.parse(localStorage.getItem('cartStorage')); //recupera el maldito carro y regresalo como resultado
        return cartStorage
    } else {
        return arr = [] //entrega un array vacio en caso de que no haya nada en locale storage, asi el carrito no colapsa cuando no hay sesion previa guardada
    }
}

const cart = loadCart(); // carrito vacio o con memoria, le digo oye tu carrito seras siempre la sesion anterior guardada


//funcion agregar y mostrar carrito

function agregaCarrito(nombre, precio) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].nombre === nombre) {
            cart[i].qty += 1;
            muestraCarrito()//actualiza carrito
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
    if (cart === undefined) { //en caso de que el carrito este vacio define que no hay nada
        return qty = 0;
    } else {
        for (let i = 0; i < cart.length; i++) {
            qty += cart[i].qty;
        }
        return qty
    }
}

//MUESTRA EL CARRITO EN EL MODAL
function muestraCarrito() {
    cartQty.innerHTML = `tiene ${Qty()} items en su carrito`; // llama la funcion de la cantidad Y LA APLICA SOBRE LA VAR DEFINIDA EN DOM
    let itemGlosa = "";

    for (let i = 0; i < cart.length; i++) { //recorro array
        itemGlosa += `<li>${cart[i].nombre}
        $${cart[i].precio} x ${cart[i].qty} = 
        $${cart[i].precio* cart[i].qty} 
        <button data-name="${cart[i].nombre}" class="agrega1">+</button> 
        <button data-name="${cart[i].nombre}" class="remueve1">-</button>
        <button data-name="${cart[i].nombre}" class="btn btn-danger btn-sm removerItem">quitar</button>          
        </li>` //agrega el elemento html al modal de carrito Y LOS BOTONES DE QUITAR Y AGREGAR POR NUM
    }

    itemList.innerHTML = itemGlosa;
    subTotal.innerHTML = `su total es $${Total()} pesos`; //subtotal del carrito

};

//subfuncion locl storage

function LStorage(item) {
    let cartStorage = []
    item.forEach(element => { //loopea por el array, ahi le vamos a pasar el carrito que es un array de objetos
        cartStorage.push({ //agarra cada item de carrito y lo pushea al array de storage
            nombre: element.nombre,
            precio: element.precio,
            qty: element.qty
        })
        localStorage.setItem('cartStorage', JSON.stringify(cartStorage)) //lo graba pasandolo  JSON
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

//funciones para limpiar el carrito

function removerItem(nombre, qty =0){
    for(let i= 0; i < cart.length ; i++){
        if(cart[i].nombre===nombre){
            if(qty>0){
                cart[i].qty -=qty
                LStorage(cart)//si elimino un item salvo el nuevo carrito sin ese item en local storage
            }
            if(cart[i].qty<1 || qty === 0){
            cart.splice(i, 1)
            }
            localStorage.clear()// si solo queda el ultimo item del carrito elimina todo 
            muestraCarrito()//y muestro carrito
            
            return
            
        }
    }
}