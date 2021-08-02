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
      <button class="btn btn-primary" id="agregar" type= "button">agregar</button>
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

let counter = 0;

//ejemplo de evento agrega a carrito 
let allBoton = Array.from (document.querySelectorAll("#agregar"));//selecciona todos los botones con el id agregar y los pasa a un array
console.log(allBoton)

