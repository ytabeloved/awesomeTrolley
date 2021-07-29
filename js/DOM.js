//manipula el DOM creando una liksta simple desde un array

/*let list = document.getElementById("itemList");
console.log(list)
itemList.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    }

);*/

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
      <button class="btn btn-primary" type= "button">agregar</button>
      </div>
      <div class= col col-lg-2>
      <button class="btn btn-danger botonRemover" type= "button">remover</button>
      </div>
      </div>
    </div>
  </div>`;
}




//mensaje de bienvenida random 


let saludos = ["Hola Florecita!!", "Hola cacahuate!!", "Bienvenido meloncito!",
    "Hola ratoncito!!", "hola gatito!!", "welcome pastito!!"
];
//funcion de index random

function random(min, max) {
    return Math.random() * (max - min) + min;
}

let mystery = Math.round(random(0, (saludos.length - 1)));



//mnipulacion del DOM para el saljudo
let saludo = document.getElementById("saludo");

let h1 = document.createElement("h1");
h1.classList.add('display-1') //agregue clase de bootstrap
let hola = saludos[mystery];
h1.innerHTML = hola;
saludo.appendChild(h1);