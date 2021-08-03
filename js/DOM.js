//crea una lista en base a un objeto y plantillas de texto literal

for (const producto of stockTienda) {
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


const itemList = document.getElementById("lista items");
const cartQty = document.getElementById("cart-qty");
const subTotal = document.getElementById("cart-total");

muestraCarrito(); //muestra carrito si es que hay items en locale storage si no carrito estara vacio

// evento agrega a carrito 
let allBoton = Array.from(document.querySelectorAll(".agregar")); //selecciona todos los botones con el class agregar y los pasa a un array
allBoton.forEach(ele => ele.addEventListener('click', () => {
  agregaCarrito(ele.getAttribute('id'), ele.getAttribute(`data-price`)) //ele significa elemento
  muestraCarrito();
  LStorage(cart)

}))


//elimina item del carrito y maneja clicks

itemList.onclick = function (e) {
  //console.log("clickeado");
  console.log(e.target);
  if (e.target && e.target.classList.contains('removerItem')) {
    const nombre = e.target.dataset.name //
    removerItem(nombre)
    LStorage(cart)
  }

}




//let allBoton = Array.from(document.querySelectorAll(".agregar"))