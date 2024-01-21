'use strict';

/*------------*\
*index.js
*   Estructura
*   - IIFE
*   - Constantes
*   - Funciones
*   - Código:
        > Animación del menú hamburguesa
        > Puntero personalizado
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

    // PUNTERO PERSONALIZADO

    // Cuando hago MOUSEENTER en hero, a pointer le ADD la clase isActive
    // Cuango hago MOUSELEAVE en hero, a pointer le REMOVE la clase isActive
    //Cuando hago MOUSEMOVE en hero, pointer sigue el movimiento del puntero

    // Selección del puntero
    const pointer = document.querySelector(".pointer")

    // Selección del hero
    const hero = document.querySelector(".hero")

    hero.addEventListener("mouseenter", () => pointer.classList.add('isActive'))

    hero.addEventListener("mouseleave", () => pointer.classList.remove('isActive'))

    hero.addEventListener("mousemove", trackCursor) /* Hará que el puntero personalizado se mueva con el puntero */

    function trackCursor(e) {
        const rectHero = hero.getBoundingClientRect() /*Nos permite tener en cuanta la posición del hero (top, right, bottom, left) */

        /*Las siguientes constantes w , h permiten obtener el tamaño del puntero*/
        const w = pointer.clientWidth
        const h = pointer.clientHeight

        /*Calculamos la posición del hero, para que al hacer scroll, el cursor siga apareciendo y desapareciendo al entrar y salir del hero, 
        ya que estaba teniendo un problema donde al hacer scroll, cambiaba el punto de entrada y salida del cursor */
        const heroX = e.clientX - rectHero.left - w / 2
        const heroY = e.clientY - rectHero.top - h / 2

        /*Indicamos la nueva posición del puntero */
        pointer.style.transform = `translate(${heroX}px, ${heroY}px)`
    }

    // PUNTERO PERSONALIZADO
})();

/* IIFE */