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

// Obtener el elemento nav
const navElement = document.querySelector('nav');

// Obtener el elemento nav ul
const navulElement = document.querySelector('nav ul');

// Obtener el elemento nav ul li
const navulliElement = document.querySelector('nav ul li');

// Obtener el elemento nav ul li a
const navulliaElement = document.querySelector('nav ul li a');

// Obtener el elemento label
const labelElement = document.querySelector('label');

// Obtener el elemento nav h1
const h1Element = document.querySelector('h1');

// Obtener el elemento boton-container
const botonContainerElement = document.querySelector('.boton-container');

// Obtener el elemento boton
const botonElement = document.querySelector('.boton');

// Obtener el elemento button
const buttonElement = document.querySelector('button');

vistaTipo = 0;

// Obtiene una referencia al contenedor principal por su clase CSS
const container = document.querySelector(".container");
window.addEventListener("resize", () => {
    navulElement.style.height = '60px';
    navElement.style.height = 'auto';
    // Verifica el ancho de la ventana y ajusta el estilo del contenedor en consecuencia
    if (window.innerWidth <= 800) {
        navElement.style.flexDirection = 'column';
        navElement.style.height = 'auto';
        botonContainerElement.style.width= '95%'; 
        navulElement.style.width= '100%'; 
        if (window.innerWidth <= 640) {
            if(vistaTipo == 1){
            container.style.maxWidth = "360px";
            }else{
                botonContainerElement.style.width= '65%'; 
            }
        }
    } else {
        // if(vistaTipo ==0){
        container.style.maxWidth = "1500px";
        botonContainerElement.style.width= '95%';
        if(window.innerWidth >= 800) {
            botonContainerElement.style.width = 'auto';
            navElement.style.height = '60px';
            navElement.style.justifyContent = 'space-between';
            navElement.style.flexDirection = 'row';
            navulElement.style.width= '65%';
            navulElement.style.height= navElement.style.height;
        // navElement.style.alignItems = 'center';
        // navElement.style.height = 'auto';
        //navElement.style.flexDirection = "inline";
        // }
    }
    }
});

// Llama a la función de cambio de tamaño inicialmente para establecer el valor correcto al cargar la página
window.dispatchEvent(new Event('resize'));

// Agrega un evento de clic al botón de "Vista de Escritorio"
desktopButton.addEventListener("click", () => {
    
    vistaTipo = 0;

    h1Element.style.fontSize = '36px';
    h1Element.style.margin = '0';

    // Cambia el estilo del contenedor para ajustar la vista de escritorio
    container.style.maxWidth = "1500px";
    if (window.innerWidth <= 767) {
        // navElement.style.alignItems = 'center'; 
        
        navulElement.style.height = '60px';
    
        navElement.style.flexDirection = "column";
        navElement.style.height = 'auto';
        navElement.style.alignItems = 'center';
        navElement.style.justifyContent = 'space-between';
        navElement.style.padding = '0';

        navulElement.style.width = '100%';
        navulElement.style.listStyleType = 'none';
        navulElement.style.margin = '0';
        navulElement.style.padding = '0';
        navulElement.style.display = 'flex';
        // navulElement.style.backgroundColor = 'green';

        botonContainerElement.style.alignItems = 'center';
        botonContainerElement.style.paddingBottom = '5px';
        botonContainerElement.style.paddingTop = '5px';
        botonContainerElement.style.display = 'flex';
        botonContainerElement.style.flexDirection = 'row';
        if (window.innerWidth <= 640) {
        botonContainerElement.style.width= '65%'; 
        }
        botonContainerElement.style.gap= '10px'; /* Espacio entre los botones */

        // navulliElement.style.position = 'relative';
        // navulliElement.style.alignItems = 'center';
        // navulliElement.style.width = '100%';
        // navulliElement.style.display = 'flex';

        // navulliaElement.style.margin = '0 auto';
        // navulliaElement.style.textDecoration = 'none';
        // navulliaElement.style.alignItems = 'center';
        // navulliaElement.style.height = '100%';
        // navulliaElement.style.width = '100%';
        // navulliaElement.style.display = 'flex';


    }else if(window.innerWidth >= 800){
        navElement.style.alignItems = 'center';
        navElement.style.flexDirection = "inline";
        navElement.style.flexDirection = 'row';
        navElement.style.justifyContent = 'space-between';
        navElement.style.padding = '0';
        
        navulElement.style.listStyleType = 'none';
        navulElement.style.margin = '0';
        navulElement.style.padding = '0';
        navulElement.style.height = '100%';
        navulElement.style.display = 'flex';
        navulElement.style.width = '65%';
        
        botonContainerElement.style.flexDirection = 'row';
        
        navElement.style.height = '60px';
    }

    navElement.style.alignItems = 'center';
    navElement.style.flexDirection = "inline";
    navElement.style.justifyContent = 'space-between';
    navElement.style.padding = '0';
    // navElement.style.height = 'auto';
    // navElement.style.display = 'flex';

    navulElement.style.listStyleType = 'none';
    navulElement.style.margin = '0';
    navulElement.style.padding = '0';
    navulElement.style.display = 'flex';

    botonContainerElement.style.alignItems = 'center';
    botonContainerElement.style.paddingBottom = '5px';
    botonContainerElement.style.paddingTop = '5px';
    botonContainerElement.style.display = 'flex';
    botonContainerElement.style.flexDirection = 'row';

    labelElement.style.fontSize = '18px'; 
    labelElement.style.display = 'block'; /* Hace que las etiquetas ocupen todo el ancho disponible */
    labelElement.style.color = '#333'; /* Color del texto de las etiquetas */
    labelElement.style.marginBottom = '10px'; /* Margen inferior para separar las etiquetas de los campos de entrada */

    h1Element.style.fontSize = '36px';
    h1Element.style.margin = '0';

    window.addEventListener("resize", () => {

        // Verifica el ancho de la ventana y ajusta el estilo del contenedor en consecuencia
        if (window.innerWidth <= 800) {
            // navElement.style.alignItems = 'center';
            navElement.style.flexDirection = "column";
            botonContainerElement.flexDirection = 'row';
            navulElement.style.width = '100%';
            navulElement.style.height = navElement.style.height;
            navElement.style.height = 'auto';
            
        }else if(window.innerWidth >= 800){
            navElement.style.alignItems = 'center';
            navElement.style.height = 'auto';
            navElement.style.flexDirection = "inline";
            navElement.style.flexDirection = 'row';
            navElement.style.justifyContent = 'space-between';
            navElement.style.padding = '0';
            
            navulElement.style.listStyleType = 'none';
            navulElement.style.margin = '0';
            navulElement.style.padding = '0';
            navulElement.style.height = navElement.style.height;
            navulElement.style.display = 'flex';
            navulElement.style.width = '65%';
            
            botonContainerElement.flexDirection = 'row';
            
            navElement.style.height = '60px';
            
        }
    });

    // navulliElement.style.position = 'relative';
    // navulliElement.style.width = '100%';
    // navulliElement.style.display = 'flex';
    // navulElement.style.alignItems = 'center';

    // navulliaElement.style.textDecoration = 'none';
    // navulliaElement.style.alignItems = 'center';
    // navulliaElement.style.display = 'flex';
    // navulliaElement.style.height = '100%';
    // navulliaElement.style.width = '100%';
    // navulliaElement.style.margin = '0 auto';

    // container.style.maxWidth = '1500px'; /* Establece el ancho máximo del contenedor principal */
    // container.style.margin = '0 auto'; /* Centra el contenedor horizontalmente en la página */
    // container.style.borderRadius = '5px'; /* Agrega bordes redondeados al contenedor */
    // container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)'; /* Agrega una sombra al contenedor */
    // container.style.marginBottom = '60px';    
    // container.style.padding = '20px';

    // botonElement.style.display = 'inline-block';
    // botonElement.style.marginRight = '7px';
    // botonElement.style.marginLeft = '0';
    // botonElement.style.padding = '10px 6px';
    // botonElement.style.textDecoration = 'none';
    // botonElement.style.border = 'none';
    // botonElement.style.borderRadius= '5px';
    // botonElement.style.cursor = 'pointer';
    // botonElement.style.fontSize = '18px';

    // textarea.height = '120px'; /* Altura más pequeña para textarea en dispositivos móviles */

    // buttonElement.style.fontSize = '18px'; /* Tamaño de fuente más pequeño para botón en dispositivos móviles */
    // buttonElement.style.display = 'block'; /* Hace que el botón ocupe todo el ancho disponible */
    // buttonElement.style.width = '35%'; 
    // buttonElement.style.margin = '0 auto'; /* Establece márgenes automáticos a la izquierda y la derecha, centrando el bloque */
    // buttonElement.style.padding = '15px'; /* Relleno para el botón */
    // buttonElement.style.backgroundColor = '#336699'; /* Color de fondo del botón */
    // buttonElement.style.color = '#fff'; /* Color del texto del botón */
    // buttonElement.style.border = 'none'; /* Sin borde */
    // buttonElement.style.borderRadius= '5px'; /* Bordes redondeados para el botón */
    // buttonElement.style.cursor = 'pointer'; /* Cambia el cursor al pasar sobre el botón */
    // buttonElement.style.transition = 'backgroundColor 0.3s'; /* Transición de color de fondo al pasar el cursor */

});
// Agrega un evento de clic al botón de "Vista Móvil"
mobileButton.addEventListener("click", () => {

    vistaTipo = 1;

    // Cambia el estilo del contenedor para ajustar la vista móvil
    container.style.maxWidth = "360px";    

    // localStorage.setItem('vista', 'movil');
    
    navElement.style.height = 'auto';
    navElement.style.flexDirection = 'column';
    navElement.style.alignItems = 'center';

    // navulliaElement.style.paddingLeft = '0%';
    // navulliaElement.style.textDecoration = 'none';
    // navulliaElement.style.alignItems = 'center';
    // navulliaElement.style.display = 'flex';
    // navulliaElement.style.height = '100%';

    /* Estilos para los elementos de navegación */

    navulElement.style.listStyleType = 'none';
    navulElement.style.margin = '0';
    navulElement.style.padding = '0';
    navulElement.style.height = '60px%';
    navulElement.style.width= '100%';
    navulElement.style.display = 'flex';
    
    /* Estilos para los enlaces de navegación */

    // navulliElement.style.position = 'relative';
    // navulliElement.style.width = '100%';
    // navulliElement.style.display = 'flex';

    /* Estilos para los enlaces de navegación */

    // container.style.padding = '10px'; /* Reducción del relleno para dispositivos móviles */
    
    // botonContainerElement.style.alignItems = 'center';
    // botonContainerElement.style.marginBottom = '15px'; 

    // botonElement.style.width = '100%'; /* O ajusta según sea necesario */
    // botonElement.style.margin = '0px';
    // botonElement.style.marginBottom = '5px';

    h1Element.style.fontSize = '30px'; /* Tamaño de fuente más pequeño para dispositivos móviles */
    
    labelElement.style.fontSize = '12px'; /* Tamaño de fuente más pequeño para etiquetas en dispositivos móviles */

    // input[type="text"].fontSize = '14px';
    // input[type="email"].fontSize = '14px';
    // select.fontSize = '14px';
    // textarea.style.fontSize = '14px'; /* Tamaño de fuente más pequeño para campos de entrada en dispositivos móviles */

    // textarea.height = '100px'; /* Altura más pequeña para textarea en dispositivos móviles */

    // buttonElement.style.fontSize = '16px'; /* Tamaño de fuente más pequeño para botón en dispositivos móviles */
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