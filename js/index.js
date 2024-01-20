"use strict";

// Cuando haga click en el boton .abrir__svg se abrira el menu en pantalla completa
// Cuando haga click en el boton .cerrar__svg se cerrara el menu
const modalMenu = document.querySelector(".modal__menu");
const botones = document.querySelectorAll(".abrir__svg , .cerrar__svg");
const todoBody = document.querySelector("body")

botones.forEach( function ( eachBoton , index ){
  eachBoton.addEventListener("click" , function() {
    modalMenu.classList.toggle("active")
    todoBody.classList.toggle("mostrar")
  })
})


//Cuando hago click en una de las pills .caja__span se edita el color del background aleatoriamente.
const pastillas = document.querySelectorAll(".caja__span")
pastillas.forEach( function ( eachPastilla , index ){
  pastillas[index].addEventListener("click" , function(){

    const colorRandom = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    
    eachPastilla.style.backgroundColor = colorRandom
  } )
})


// Cuando se haga click en una card .mujeres__lista se disparara un modal a pantalla completa con la imagen (Lightbox)
// Cuando se haga click en el boton .mujeres__button se cerrara el modal
const cardMujeres = document.querySelectorAll(".mujeres__lista")
const modalLightbox = document.querySelector(".lightbox")
const imgLightbox = document.querySelectorAll(".imgActiva")
const botonCerrar = document.querySelector(".mujeres__button")

cardMujeres.forEach( function ( eachCard , index ){
  cardMujeres[index].addEventListener("click" , function(){
    modalLightbox.classList.add("modal")
    imgLightbox.forEach( function ( eachImg , index ){
      imgLightbox[index].classList.remove("modal")
    })
    imgLightbox[index].classList.add("modal")
  })
})
botonCerrar && botonCerrar.addEventListener("click" , function(){
  modalLightbox.classList.remove("modal")
})


// Cuando hago click en el titulo del filosofo .filosofos__h3 se activara el tab .filosofos__p correspondiente por index

const botonesFilosofos = document.querySelectorAll(".filosofos__h3");
const frasesFilosofos = document.querySelectorAll(".filosofos__p");


botonesFilosofos.forEach(function (eachFilosofo, index) {
  botonesFilosofos[index].addEventListener("click", function () {
    botonesFilosofos.forEach( function ( eachFilosofo , index){
      botonesFilosofos[index].classList.remove("amarillo")
    })
    frasesFilosofos.forEach(function (eachFrase, index) {
      frasesFilosofos[index].classList.remove("hover");
    });
    frasesFilosofos[index].classList.add("hover");
    botonesFilosofos[index].classList.add("amarillo")
  });
});


// Cuando hagas click a cada una de las .lecciones se animara con una rotacion en X
// Ocultando la .leccion y mostrando la .reflexion correspondiente


const leccionesBarra = document.querySelectorAll(".lecciones");
const lecciones = document.querySelectorAll(".leccion");
const reflexiones = document.querySelectorAll(".reflexion");


leccionesBarra.forEach(function (eachBarra, index) {
  leccionesBarra[index].classList.remove("active");
  leccionesBarra[index].addEventListener("click", function () {
    lecciones[index].classList.toggle("active");
    leccionesBarra[index].classList.toggle("active");
    reflexiones[index].classList.toggle("active");
  });
});


// Cuando hagas click en el navegador .slider__btn de la seccion se mostrara la siguiente imagen en modo carrusel con Transform:translateX

const sliderContenedor = document.querySelector(".slider__contenedor")
const marcadores = document.querySelectorAll(".slider__btn")
console.log(marcadores)

marcadores.forEach(function( eachMarcador , index ){
  
  marcadores[index].addEventListener("click" , function(){
    let calculo = index * (100 / 5)
    console.log(calculo)
    sliderContenedor.style.transform = `translateX(-${calculo}%)`

    marcadores.forEach(function ( eachMarcador , index){
      marcadores[index].classList.remove("pintado")
    })
    marcadores[index].classList.add("pintado")

  })
})