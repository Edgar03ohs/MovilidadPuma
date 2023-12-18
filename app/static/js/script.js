/* document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('botonRegistro').addEventListener('click',function(){
        window.location.href='/formulario';
    })
    document.getElementById('botonInicioDeSesion').addEventListener('click',function(){
        window.location.href='/inicioSesion';
    }) */

// const vistaActual = localStorage.getItem('vista') || 'escritorio';

// // JavaScript para cambiar la vista al hacer clic en los botones

// // Aplicar estilos o clases según la vista actual
// if (vistaActual === 'movil') {
//     // Aplicar estilos para la vista de móvil
//     document.body.classList.add('vista-movil');
// } else {
//     // Aplicar estilos para la vista de escritorio
//     document.body.classList.remove('vista-movil');
// }


// Obtiene una referencia al botón de "Vista de Escritorio" por su ID
const desktopButton = document.getElementById("desktop-button");

// Obtiene una referencia al botón de "Vista Móvil" por su ID
const mobileButton = document.getElementById("mobile-button");



// Obtiene una referencia al botón de "Iniciar Sesion" por su ID
const botonInicioDeSesion = document.getElementById("botonInicioDeSesion");


// Obtiene una referencia al botón de "Registrarse" por su ID
const botonRegistro = document.getElementById("botonRegistro");

// Obtiene una referencia al contenedor principal por su clase CSS
const container = document.querySelector(".container");
window.addEventListener("resize", () => {
    // Verifica el ancho de la ventana y ajusta el estilo del contenedor en consecuencia
    if (window.innerWidth <= 767) {
        container.style.maxWidth = "360px";
    } else {
        container.style.maxWidth = "1500px";
    }
});

// Llama a la función de cambio de tamaño inicialmente para establecer el valor correcto al cargar la página
window.dispatchEvent(new Event('resize'));

// Agrega un evento de clic al botón de "Vista de Escritorio"
desktopButton.addEventListener("click", () => {
    // Cambia el estilo del contenedor para ajustar la vista de escritorio
    container.style.maxWidth = "1500px";
});


// Agrega un evento de clic al botón de "Vista Móvil"
mobileButton.addEventListener("click", () => {
    // Cambia el estilo del contenedor para ajustar la vista móvil
    
    // localStorage.setItem('vista', 'movil');

    container.style.maxWidth = "360px";
});

// Agrega un evento de clic al botón de "Iniciar Sesion"
botonInicioDeSesion.addEventListener("click", () => {
    // Cambia el estilo del contenedor para ajustar la vista móvil
    window.location.href='/inicioSesion';
});

// Agrega un evento de clic al botón de "Registrarse"
botonRegistro.addEventListener("click", () => {
    // Cambia el estilo del contenedor para ajustar la vista móvil
    window.location.href='/formulario';
});
// })