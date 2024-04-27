'use strict';

/*------------*\
*index.js
*   Estructura
*   - IIFE
*   - Constantes
*   - Funciones
*   - Código:
        > Animación del menú hamburguesa
        > Animación del carrousel
*-------------*/

/* IIFE */
(function () {

    // ANIMACIÓN DEL MENÚ HAMBURGUESA

    // Cuando hago CLICK en burgerBtn a burgerBtn & headerMenu le TOGGLE la clase active
    // Cuano hago CLICK a los headerLi & rrssLi a burgerBtn & headerMenu le REMOVE la clase active

    // Selección del botón hamburguesa
    const burgerBtn = document.querySelector(".burger__btn")

    // Selección del menú móvil
    const headerMenu = document.querySelector(".header__menu")

    // Selección de todos los elementos del menú de navegación de la web
    const headerLis = document.querySelectorAll(".header__li")

    // Selección de todos los elementos del menú de navegación de las redes sociales
    const rrssLis = document.querySelectorAll(".rrss__li")

    /*
    Esta función hace que al clicar en el botón hamburguesa se despliegue el menú móvil añadiendole la clase active, además de cambiar el botón
    en si, siempre añadiendo la clase active.
    */
    burgerBtn.addEventListener("click", () => {
        burgerBtn.classList.toggle("active")
        headerMenu.classList.toggle("active")
    })

    /*
    Esta función hace que al clicar en cualquier elemento del menú de navegación de la web se les quite la clase active tanto al menú como
    al botón hamburguesa.
    */
    headerLis.forEach((eachHeaderLis, index) => {
        headerLis[index].addEventListener("click", () => {
            burgerBtn.classList.remove("active")
            headerMenu.classList.remove("active")
        })
    })

    /*
    Esta función hace que al clicar en cualquier elemento del menú de navegación de las redes sociales se les quite la clase active tanto al menú como
    al botón hamburguesa.
    */
    rrssLis.forEach((eachRssLis, index) => {
        rrssLis[index].addEventListener("click", () => {
            burgerBtn.classList.remove("active")
            headerMenu.classList.remove("active")
        })
    })
    // ANIMACIÓN DEL MENÚ HAMBURGUESA

    // ANIMACIÓN DEL CARROUSEL
        //Cuando hago CLICK en carrousel__btn, carrousel__grande hace TRANSLATEx () ----> INDEX * (100 / numero de botones)
           //Cuando hago CLICK en carrousel__btn, REMOVE la clase active a todos los botones y ADD la clase active al botón CLICADO

        const carrouselBtn = document.querySelectorAll(".carrousel__btn")
        const carrouselGrande = document.querySelector(".carrousel__grande")
        const numBtns = carrouselBtn.length //Representa el nº de botones que hay en el carrousel para adaptarlo automáticamente en el caso de añadir más en el futuro

        carrouselBtn.forEach((eachBtn, index) => {
            carrouselBtn[index].addEventListener("click", () => {
                carrouselGrande.style.transform = `translateX(-${index * (100 / numBtns)}%)`
            })
        })    

        carrouselBtn.forEach((eachBtn, index) => {
            carrouselBtn[index].addEventListener("click", () => {
                carrouselBtn.forEach((eachBtn, index) => {
                    carrouselBtn[index].classList.remove("active")
                })
                carrouselBtn[index].classList.add("active")
            })
        })
    // ANIMACIÓN DEL CARROUSEL

})();

/* IIFE */