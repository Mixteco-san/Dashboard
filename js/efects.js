const phoneScreen = matchMedia("screen and (max-width: 480px)") //Agregamos nediaquerry
const Menu = document.querySelector('.menu')
const btnBurger = document.querySelector('#btn-burger')
const btnClose = document.querySelector('#btn-close')

phoneScreen.addListener(validation);

function validation(changePhone) {
    if( changePhone.matches ) {
        console.log('Estoy cambiando a modo SmartPhone')
        btnBurger.addEventListener('click', Muestra)
        btnClose.addEventListener('click', Oculta)
    }
    else {
        console.log('Pase a modo tableta')
        btnBurger.removeEventListener('click', Muestra)
        btnClose.removeEventListener('click', Oculta)
    }
}

validation(phoneScreen)

function Muestra() {
    Menu.classList.add('activo')
}

function Oculta() {
    Menu.classList.remove('activo')
}