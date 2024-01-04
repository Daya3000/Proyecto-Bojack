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


// const botonBtn = document.querySelector('.boton__button')
// const personajesUl = document.querySelector('.personajes__ul')
// const personajesIl = document.querySelectorAll('.personas__il')

// console.log(botonBtn)
// console.log(personajesUl)

// botonBtn.addEventListener('click', function(){
    
    

//     personajesIl.forEach( function (eachIl , index){
//         personajesUl[index].addEventListener('click', function(){

//         })
//         let calculo = personajesIl * (100 / 4 )
//         console.log(calculo)
//     })
//     personajesIl.style.transform = 'translateX(-${calculo}%)'
// })


const botonesFilosofos = document.querySelectorAll('.filosofos__h3')
const frasesFilosofos = document.querySelectorAll('.filosofos__p')

console.log(botonesFilosofos)
console.log(frasesFilosofos)

botonesFilosofos.forEach( function ( eachFilosofo , index ){

    botonesFilosofos[index].addEventListener( 'click' , function (){
        frasesFilosofos.forEach( function ( eachFrase , index ){
            frasesFilosofos[index].classList.remove('isHover')
            
        })
        frasesFilosofos[index].classList.add('isHover')
    })
})

const leccionesBarra = document.querySelectorAll('.lecciones')
const lecciones = document.querySelectorAll('.leccion')
const reflexiones = document.querySelectorAll('.reflexion')

console.log(leccionesBarra)
console.log(reflexiones)
console.log(lecciones)

leccionesBarra.forEach( function( eachBarra , index ){
    leccionesBarra[index].classList.remove('active')
    leccionesBarra[index].addEventListener( 'click' , function (){
        lecciones[index].classList.toggle('active')
        leccionesBarra[index].classList.toggle('active')
        reflexiones[index].classList.toggle('active')
    })
})