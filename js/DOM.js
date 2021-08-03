//crea una lista en base a un objeto y plantillas de texto literal

for (const producto of stockTienda) { //AQUI HACEMOS LAS TARJETAS DE PRODUCTOS
  let items = document.getElementById("itemsDisplay");
  items.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${producto.foto}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <h6 class="card-title">valor: $ ${producto.precio} </h6>
      <p class="card-text">${producto.descr}</p>
      <p class="card-text">Sku: ${producto.itemNum}</p>
      <div class="row row-cols-2">
      <div class= col col-lg-2>
      <button class="btn btn-primary agregar"  id="${producto.nombre}" data-price ="${producto.precio}" type= "button">agregar</button>
      </div>
      <div class= col col-lg-2>
     
      </div>
      </div>
    </div>
  </div>`;
}

//<button class="btn btn-danger botonRemover" type= "button">remover</button> boton remover 


//mensaje de bienvenida random 


let saludos = ["Hola Florecita!!", "Hola cacahuate!!", "Bienvenido meloncito!",
  "Hola ratoncito!!", "hola gatito!!", "welcome pastito!!"
];
//funcion de index random

function random(min, max) {
  return Math.random() * (max - min) + min;
}

let mystery = Math.round(random(0, (saludos.length - 1)));



//mnipulacion del DOM para el saludo
let saludo = document.getElementById("saludo");

let h1 = document.createElement("h1");
h1.classList.add('display-1') //agregue clase de bootstrap
let hola = saludos[mystery];
h1.innerHTML = hola;
saludo.appendChild(h1);


//EVENT LISTENERS DESAFIO 9
//carga carrito guardado


const itemList = document.getElementById("lista items"); //CREA LISTA DE NODO CON LA CLASE INDICADA
const cartQty = document.getElementById("cart-qty");
const subTotal = document.getElementById("cart-total");

muestraCarrito(); //muestra carrito si es que hay items en locale storage si no carrito estara vacio O SEA LA CARGA INICIAL DEL CARRITO

// evento agrega a carrito 
let allBoton = Array.from(document.querySelectorAll(".agregar")); //selecciona todos los botones con el class agregar y los pasa a un array
allBoton.forEach(ele => ele.addEventListener('click', () => { //loopea por el array de botones y les agrega un evento 
  agregaCarrito(ele.getAttribute('id'), ele.getAttribute(`data-price`)) //ele significa elemento y dependiendo del boton agarra los atributos
  muestraCarrito();//actualiza el carrito en pantalla
  LStorage(cart)//actualiza el carrito en storage

}))


//elimina item del carrito y maneja clicks

itemList.onclick = function (e) { //funcion de un evento, cuando clickee un item del array itemlist
  //console.log("clickeado");
  console.log(e.target);//control interno
  if (e.target && e.target.classList.contains('removerItem')) {//si el target es parte de la lista del carrito y ademas es un boton remover
    const nombre = e.target.dataset.name //crea var con el nombre del boton
    removerItem(nombre)//remueve el item seleccionado
   } else if (e.target && e.target.classList.contains('agrega1')){
     const name = e.target.dataset.name 
     agregaCarrito(name);

   }else if (e.target && e.target.classList.contains('remueve1')){
    const nombre = e.target.dataset.name //crea var con el nombre del boton
    removerItem(nombre, 1);
   }

}




//let allBoton = Array.from(document.querySelectorAll(".agregar"))