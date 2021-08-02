//maldito ecommerce


let cart = []; // carrito vacio

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


/*PREPARACION PARA PRE ENTREGA */


//crea lista de items disponibles en tienda YA NO LO NECESITO PORQUE LOS PROD ESTAN CREADOS EN FORMATO CARDS
//let itemList = stockTienda.map(el => el.nombre); //crea un listado solo con los  nombres pasando el array como elemento (eso es "el") y busca la propiedad nombre

//ALERTA DE CODIGO MUERTO

/* NO PUDE REPLICAR EL PROCESO CON EVENT HANDLERS ASI QUE LO HARE MAS ABAJO.

class CartItem { //crea un subitem del carrito ejemplo "2 x poleras x 3000 pesos"
    constructor(item, qty) {
        this.nombre = item.nombre; //saca el nombre del item guardado en el stock tienda
        this.precio = item.precio;
        this.itemNum = item.itemNum; //codigo para encontrar el item
        this.qty = qty;
        this.subtotal = item.precio * qty //subtotal del item individual

    }
}

//variables de las funciones
let qtyItem; //cantidad del item siiiii
let cartItem; //item en si 
let addedItem; //items ya agregados siiiii

//proceso de compra

//elegir un item

function addItem() {
    do {
        cartItem = prompt("elije uno de estos productos: " + itemList);
        qtyItem = prompt("cuantos quieres?: ")
    }
    while (cartItem === "" || isNaN(cartItem) !== true || cartItem === null)

}


//validar que haya items

//sub funcion si o no

function hayStock(stock, qty) { //devuleve un bool en base si el stock es mas que lo pedido
    stock = parseInt(addedItem.stock);
    if (stock >= qty) {
        return true;
    } else {
        return false;
    }

}

//valida

function validaItems(ItemName, stockTienda, qty) {
    addedItem = stockTienda.find(Item => Item.nombre === ItemName.toUpperCase()); //trae el objeto completo para agregarlo como var
    if (!addedItem) { //si escribiste cualquier cosa que no existe
        alert("item no existe");
    } else {
        bool = hayStock(addedItem, qty)
        if (bool === true) { //en teoria deberia validar si es true que hay stock avanzar al paso siguiente
            return true;
        } else if (bool === false) { //si es falso avisar que no queda stock
            alert("no nos queda mas " + ItemName + " agotado");
        }
    }
}

//funcion agregar al carro
function addCart(addedItem) {
    cart.push(addedItem);
}


//compra
let getNewItem; //no funcionaba con var local...

function compra() {
    addItem(); //llama al prompt
    let masItems = prompt("agrega al carrito s/n?");
    let valida = validaItems(cartItem, stockTienda, qtyItem) //PASA LA FUNCION QUE VALIDA
    if (valida === true) {
        if (masItems.toLowerCase() === "s") {
            let articulo = new CartItem(addedItem, qtyItem)
            addCart(articulo)
            getNewItem = prompt("quiere agregas mas items?? s/n"); // agregaras mas items

        } else {
            getNewItem = prompt("quiere agregas mas items?? s/n"); //pregunta solo y no agrega nada

        }
    } else {
        alert("lo siento no hay");
        getNewItem = prompt("quiere agregas mas items?? s/n");

    }
}


//armando la funcion 
compra();
while (getNewItem.toLowerCase() == "s") {
    compra();
}

//para ver carrito

alert("el carrito estara en la consola despues que apretes aceptar")






//mas debugging
console.log("ESTE ES EL CARRITO por favor abrir el array para ver subtotales:");
console.log(cart);*/