'use strict'

/*------------*\
*index.js
*   Estructura
*   - Constantes
*   - Funciones
*-------------*/

// ANIMACIÓN DEL MENÚ HAMBURGUESA

// Cuando hago CLICK en headerBtn a headerBtn & headerMenu le TOGGLE la clase active
    // Cuano hago CLICK a los headerLi & rrssLi a headerBtn & headerMenu le REMOVE la clase active

// Selección del botón hamburguesa
const headerBtn = document.querySelector(".header__btn")

// Selección del menú móvil
const headerMenu = document.querySelector(".header__menu")

// Selección de todos los elementos del menú de navegación de la web
const headerLis  = document.querySelectorAll(".header__li")

// Selección de todos los elementos del menú de navegación de las redes sociales
const rrssLis = document.querySelectorAll(".rrss__li")
    
    console.log (headerBtn)
    console.log (headerMenu)
    console.log (headerLis)
    console.log (rrssLis)

/*
Esta función hace que al clicar en el botón hamburguesa se despliegue el menú móvil añadiendole la clase active, además de cambiar el botón
en si, siempre añadiendo la clase active.
*/
headerBtn.addEventListener("click" , ()=>{
    headerBtn.classList.toggle("active")
    headerMenu.classList.toggle("active")
})

/*
Esta función hace que al clicar en cualquier elemento del menú de navegación de la web se les quite la clase active tanto al menú como
al botón hamburguesa.
*/
headerLis.forEach((eachHeaderLis , index)=>{
    headerLis[index].addEventListener("click" , ()=>{
        headerBtn.classList.remove("active")
        headerMenu.classList.remove("active")
    })
})

/*
Esta función hace que al clicar en cualquier elemento del menú de navegación de las redes sociales se les quite la clase active tanto al menú como
al botón hamburguesa.
*/
rrssLis.forEach((eachRssLis , index)=>{
    rrssLis[index].addEventListener("click" , ()=>{
        headerBtn.classList.remove("active")
        headerMenu.classList.remove("active")
    })
})