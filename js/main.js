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
        stock: "10",
        descr: "descripcion prod",
        foto: "url",
        itemNum: 1,
    },
    {
        nombre: "GORRO",
        precio: 1500,
        stock: "10",
        descr: "descripcion prod",
        foto: "url",
        itemNum: 2,
    },
    {
        nombre: "CALZAS",
        precio: 1500,
        stock: "10",
        descr: "descripcion prod",
        foto: "url",
        itemNum: 3,
    },
    {
        nombre: "LEGGINS",
        precio: 1500,
        stock: "10",
        descr: "descripcion prod",
        foto: "url",
        itemNum: 4,
    },
    {
        nombre: "SHORT",
        precio: 1500,
        stock: "10",
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
let itemList = stockTienda.map(el => el.nombre);//crea un listado solo con los  nombres pasando el array como elemento (eso es "el") y busca la propiedad nombre
console.log(itemList);

//variables de las funciones
let qtyItem=parseInt(); //cantidad del item
let cartItem; //item en si
let getNewItem; // agregaras mas items
let addedItem; //items ya agregados

//proceso de compra

//elegir un item

function addItem() {
    do {
        cartItem= prompt("elije uno de estos productos: " + itemList);
        qtyItem = prompt("cuantos quieres?: ")
    }
    while (cartItem === "" || isNaN(cartItem) !== true || cartItem === null) 

}
addItem();

console.log(cartItem)
console.log(qtyItem)