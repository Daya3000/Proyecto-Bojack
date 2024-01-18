"use strict";


const modalMenu = document.querySelector(".modal__menu");
const botones = document.querySelectorAll(".abrir__svg , .cerrar__svg");
const todoBody = document.querySelector("body")

botones.forEach( function ( eachBoton , index ){
  eachBoton.addEventListener("click" , function() {
    modalMenu.classList.toggle("active")
    todoBody.classList.toggle("mostrar")
  })
})

const pastillas = document.querySelectorAll(".caja__span")

pastillas.forEach( function ( eachPastilla , index ){
  pastillas[index].addEventListener("click" , function(){

    const colorRandom = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    
    eachPastilla.style.backgroundColor = colorRandom
  } )
})

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


//Cuando hago CLICK en .fxxx
// .xxxxx

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



const sliderContenedor = document.querySelector(".slider__contenedor")
const flechas = document.querySelectorAll(".slider__flecha")
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