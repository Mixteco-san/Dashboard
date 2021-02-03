const tabletScreen = matchMedia("screen and (max-width: 767px)") //Agregamos nediaquerry
const Menu = document.querySelector('.menu')
console.log(Menu)
const btnBurger = document.querySelector('#btn-burger')
console.log(btnBurger)

tabletScreen.addListener(validationTablet)

function validationTablet(changeTablet) {
    if( changeTablet.matches ) {
        console.log('Estoy cambiando a modo tableta')
        
        btnBurger = document.addEventListener('click', muestraoculta)
    }
    else {
        console.log('Pase a otra pantalla')
        
        btnBurger = document.addEventListener('click', muestraoculta)
    }
}

validationTablet(tabletScreen)

function muestraoculta() {
    if(Menu.contains('activo')) {
        Menu.classList.remove('activo')
    }
    else {
        Menu.classList.add('activo')
    }
}