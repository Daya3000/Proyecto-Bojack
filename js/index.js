"use strict";

console.log("holaaaaa");

const modalMenu = document.querySelector(".modal__menu");
const botones = document.querySelectorAll(".abrir__svg , .cerrar__svg");

botones.forEach((boton) =>
  boton.addEventListener("click", () => modalMenu.classList.toggle("active"))
);


//Cuando hago CLICK en .fxxx
// .xxxxx

const botonesFilosofos = document.querySelectorAll(".filosofos__h3");
const frasesFilosofos = document.querySelectorAll(".filosofos__p");

console.log(botonesFilosofos);
console.log(frasesFilosofos);

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

console.log(leccionesBarra);
console.log(reflexiones);
console.log(lecciones);

leccionesBarra.forEach(function (eachBarra, index) {
  leccionesBarra[index].classList.remove("active");
  leccionesBarra[index].addEventListener("click", function () {
    lecciones[index].classList.toggle("active");
    leccionesBarra[index].classList.toggle("active");
    reflexiones[index].classList.toggle("active");
  });
});
