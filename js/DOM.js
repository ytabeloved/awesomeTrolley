//crea una lista en base a un objeto y plantillas de texto literal

for (const producto of stockTienda) { //AQUI HACEMOS LAS TARJETAS DE PRODUCTOS
  let items = $("#itemsDisplay")[0]; //agregue jquery
  items.innerHTML += `<div class="card item clear" id="${producto.nombre}" style="width: 18rem;">
    <img src="${producto.foto}" class="card-img-top " id="${producto.nombre}img" alt="item">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <h6 class="card-title">valor: $ ${producto.precio} </h6>
      <p class="card-text">${producto.descr}</p>
      <p class="card-text">Sku: ${producto.itemNum}</p>
      <div class="row row-cols-2">
      <div class= col col-lg-2>
      <button class="btn btn-primary agregar add-to-cart "  id="${producto.nombre}" data-price ="${producto.precio}" type= "button">agregar</button>
      </div>
      <div class= col col-lg-2>
     
      </div>
      </div>
    </div>
  </div>`;
}

//<button class="btn btn-danger botonRemover" type= "button">remover</button> boton remover 


//mensaje de bienvenida random ahora son baby facts!!!


let saludos = ["YOU CAN’T GIVE THEM JUST ANY NAME.", "IN SOME PLACES, BABIES ARE VERY RARE.", "THEY’VE EVOLVED TO BE ADORABLE.",
  "WE NATURALLY WANT TO SQUEEZE THEM.", "EVEN TODDLERS KNOW THEY’RE CUTE.", "THEY’RE DRAWN TO SURPRISE.", 
  "THEY HAVE A UNIQUE REFLEX THAT DISAPPEARS WITH AGE.", "THEY ALREADY KNOW TO HOLD THEIR BREATH UNDERWATER.", "THEY REALLY DO LIKE LULLABIES.",
   "THEY’RE WIRED TO IMITATE.", "THEY CAN LEARN IN THE WOMB.","THEY CAN LEARN IN THE WOMB.", "THEY CAN’T REALLY SEE.",
   "THEIR TASTE PREFERENCES CAN DEVELOP BEFORE THEY’RE BORN.", "THEY EAT LESS THAN YOU MIGHT THINK.","THEY HAVE UNIQUE HAIR.",
   "THEIR HEADS SMELL AMAZING."

]; 
//funcion de index random

function random(min, max) {
  return Math.random() * (max - min) + min;
}

let mystery = Math.round(random(0, (saludos.length - 1)));



//mnipulacion del DOM para el saludo
let saludo = $('.saludo').get(); //jquery version

let hola = saludos[mystery];
//cambio todo a jquery
let h1 = "<h2>Cute baby facts:</h2>"
let h2 = $("<h4></h4>").text(hola);
$(saludo).append(h1, h2)
$("h1").addClass('display-1')

//version vanilla

//let saludo = document.getElementById("saludo");
//let h1 = document.createElement("h1");
//agregue clase de bootstrap
//h1.classList.add('display-1')
//h1.innerHTML = hola;
//saludo.appendChild(h1);


//EVENT LISTENERS DESAFIO 9
//carga carrito guardado

const itemList = $('#lista-items').get(0);
console.log(itemList);
const cartQty = $('#cart-qty').get(0);
console.log(cartQty);
const subTotal = $('#cart-total').get(0);
//const itemList2 = document.getElementById("lista items"); //CREA LISTA DE NODO CON LA CLASE INDICADA
//console.log(itemList2);
//const cartQty = document.getElementById("cart-qty");
//const subTotal = document.getElementById("cart-total");

muestraCarrito(); //muestra carrito si es que hay items en locale storage si no carrito estara vacio O SEA LA CARGA INICIAL DEL CARRITO

// evento agrega a carrito 
let allBoton = Array.from(document.querySelectorAll(".agregar")); //selecciona todos los botones con el class agregar y los pasa a un array
allBoton.forEach(ele => ele.addEventListener('click', () => { //loopea por el array de botones y les agrega un evento 
  agregaCarrito(ele.getAttribute('id'), ele.getAttribute(`data-price`)) //ele significa elemento y dependiendo del boton agarra los atributos
  $("#lista-items").show();
  muestraCarrito(); //actualiza el carrito en pantalla
  LStorage(cart) //actualiza el carrito en storage

}))


//elimina item del carrito y maneja clicks

itemList.onclick = function (e) { //funcion de un evento, cuando clickee un item del array itemlist
  //console.log("clickeado");
  console.log(e.target); //control interno
  if (e.target && e.target.classList.contains('removerItem')) { //si el target es parte de la lista del carrito y ademas es un boton remover
    const nombre = e.target.dataset.name //crea var con el nombre del boton
    removerItem(nombre) //remueve el item seleccionado
  } else if (e.target && e.target.classList.contains('agrega1')) {
    const name = e.target.dataset.name
    agregaCarrito(name); //suma un item a qty

  } else if (e.target && e.target.classList.contains('remueve1')) {
    const nombre = e.target.dataset.name //crea var con el nombre del boton
    removerItem(nombre, 1); //remueve 1 de qty
  }

}

//funcion en jquery para limpiar el carrito

$(".limpiar-carro").on("click", function () {
  console.log("click click bitch")
  limpiaCarrito(cart);
  $(cartQty).text(`tiene 0 items en su carrito`);
  $("#lista-items").hide();
  $(subTotal).text(`su total es $0 pesos`);
});


//ocultar tienda y home por los click del navegador

$('.links').click(function () {
  console.log("click click bitch 2")
  var id = $(this).attr('href')
  var clas = $(this).attr('id')
  $('.nav-link').removeClass('active');
  $('.navLinks').hide();  
  $(id).css('display', 'flex');
  $('#'+clas).addClass('active');
})