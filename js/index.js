"use strict"

console.log("holaaaaa")

const modalMenu = document.querySelector('.modal__menu')
const botones = document.querySelectorAll(".abrir__svg , .cerrar__svg")

botones.forEach( boton => boton.addEventListener("click" , () => modalMenu.classList.toggle("isActive")))




//Cuando hago CLICK en .boton__button
    // calcular el translate = INDEX * (100 / 4)
    // .personajes__ul STYLE transform translateX()
    // .boton__button le REMOVE la clase active a TODOS
    // .boton__button le ADD la clase active a lo que hicimos CLICK

// const personajes = document.querySelector('.personajes__nav')
// console.log(personajes)


const botonBtn = document.querySelector('.boton__button')
const personajesUl = document.querySelector('.personajes__ul')
const personajesIl = document.querySelectorAll('.personas__il')

console.log(botonBtn)
console.log(personajesUl)

botonBtn.addEventListener('click', function(){
    
    

    personajesIl.forEach( function (eachIl , index){
        personajesUl[index].addEventListener('click', function(){

        })
        let calculo = personajesIl * (100 / 4 )
        console.log(calculo)
    })
    personajesIl.style.transform = 'translateX(-${calculo}%)'
})
   