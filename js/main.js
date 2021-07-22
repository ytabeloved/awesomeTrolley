// 1. LISTADO de PRODUCTOS ¿CÓMO LO VAMOS A RESOLVER?... UN ARRAY CON OBJETOS
// 2. SABER QUÉ PRODUCTO y CANTIDAD QUIERE EL USUARIO... CON PROMPT
// 3. IDENTIFICAR EL PRODUCTO USANDO METODO find .
// 4. VERIFICAR EL STOCK con condicional
// 5. AGREGAR EL PRODUCTO AL CARRITO con push
// 6. MOSTRAR EL RESULTADO POR CONSOLE con reduce.


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
        foto: "url",
        itemNum: 1,
    },
    {
        nombre: "GORRO",
        precio: 1500,
        stock: 10,
        descr: "descripcion prod",
        foto: "url",
        itemNum: 2,
    },
    {
        nombre: "CALZAS",
        precio: 1500,
        stock: 10,
        descr: "descripcion prod",
        foto: "url",
        itemNum: 3,
    },
    {
        nombre: "LEGGINS",
        precio: 1500,
        stock: 0,
        descr: "descripcion prod",
        foto: "url",
        itemNum: 4,
    },
    {
        nombre: "SHORT",
        precio: 1500,
        stock: 10,
        descr: "descripcion prod",
        foto: "url",
        itemNum: 5,
    }
];



class CartItem { //crea un subitem del carrito ejemplo "2 x poleras x 3000 pesos"
    constructor(item, qty) {
        this.nombre = item.nombre; //saca el nombre del item guardado en el stock tienda
        this.precio = item.precio;
        this.itemNum = item.itemNum; //codigo para encontrar el item
        this.qty = qty;
        this.subtotal = item.precio * qty //subtotal del item individual

    }
}

//crea lista de items disponibles en tienda
let itemList = stockTienda.map(el => el.nombre); //crea un listado solo con los  nombres pasando el array como elemento (eso es "el") y busca la propiedad nombre


//variables de las funciones
let qtyItem; //cantidad del item siiiii
let cartItem; //item en si 
let getNewItem; // agregaras mas items
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
function validaItems(ItemName, stockTienda, qty) {
    addedItem = stockTienda.find(Item => Item.nombre === ItemName.toUpperCase()); //trae el objeto completo para agregarlo como var
    if (!addedItem) { //si escribiste cualquier cosa que no existe
        alert("item no existe");
    } else {
        console.log(addedItem);
        console.log(qty)
        console.log(hayStock(addedItem, qty))
        bool = hayStock(addedItem, qty)
        if (bool === true) { //en teoria deberia validar si es true que hay stock avanzar al paso siguiente
            console.log("validado " + addedItem.nombre)
            return true;
        } else if (bool === false) { //si es falso avisar que no queda stock
            alert("no nos queda mas " + ItemName + " agotado");
        }
    }
}

//sub funcion

function hayStock(stock, qty) { //devuleve un bool en base si el stock es mas que lo pedido
    stock = parseInt(addedItem.stock);
    if (stock >= qty) {
        return true;
    } else {
        return false;
    }

}

//funcion agregar al carro
function addCart(addedItem) {
    cart.push(addedItem);
}


//funciones llamados

addItem(); //llama al prompt
validaItems(cartItem, stockTienda, qtyItem); //llamada funcion que valida




//mas debugging
console.log(itemList);
console.log("nombre " + cartItem) //valida nombre
console.log("cantidad " + qtyItem) //valida cant
console.log("este es el carrito");
console.log(cart);