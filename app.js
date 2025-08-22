/* 
Autor: -工丂尺闩㠪㇄ ᗪ闩ㄒ闩-
Creado: Agosto 2025.
Versión: 1.0.0
Descripción: Juego adivinar número secreto.
Descargado de: https://github.com/israel-data
ⓘ*/ 
//ⓘ Generar el numero a adivinar "número secreto" en una función y asiganarle a la variable local.
let numeroSecreto = generarNumeroSecreto();
let intentos = 0; //ⓘ Inicializar intentos en cero.


function asignarTextoElemento(elemento, texto) {
    //ⓘ document.querySelector se usa para accesder a un elemento de HTML, datos desde la función "condicionesIniciales"
    let elementoHTML = document.querySelector(elemento);
    //ⓘ innerHTL coloca el texto al elemento seleccionado.
    elementoHTML.innerHTML = texto;
    //ⓘ Regresar las acciones o valores de la función.
    return;
}

//ⓘ  funcion para vericar los intentos dde adivinar el numero. 
function verificarIntento() {
    //ⓘ obtener el numero introducido por el usuario y pasarlo a número.
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //ⓘ condicion if para verificar si el igual el número usuario y secreto en número y tipo
    if (numeroDeUsuario === numeroSecreto) {
        //ⓘ Colocar texto desde función al párrafo  
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //ⓘ Lamar a la funcion de habilitar y deshabilitar botones
        habilitarDeshabilitarBoton();
    } else {
        //ⓘ Ayuda al usuario cuando no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        //ⓘ Verificar el numero maximo de intentos
        if (intentos == 3){
            asignarTextoElemento('p', 'Máximo de intento 3 ¡No acertaste!');
            //ⓘ Lamar a la funcion de habilitar y deshabilitar botones
            habilitarDeshabilitarBoton();
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function habilitarDeshabilitarBoton(){
    //ⓘ Habilitar el botón de nuevo juego.
    document.getElementById('reiniciar').removeAttribute('disabled');
    //ⓘ Deshabilitar el botón de juego.
    document.getElementById('juego').setAttribute('disabled', 'true');
}

//ⓘ Función para limpiar el input de la página HTML.
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
//ⓘ Función para generar numero secreto.
function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

//ⓘ Función de condiciones iniciales del juego.
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p','Indica un número del 1 al 10');
    //ⓘ Generar un nuevo número secreto.
    numeroSecreto = generarNumeroSecreto();
    //ⓘ Poner a 1 los intentos del usuario.
    intentos = 1;
    //ⓘ Habilitar el botón de nuevo juego otra forma.
    document.getElementById('juego').removeAttribute('disabled');
    console.log(numeroSecreto);
}

//ⓘ Función para reiniciar el juego.
function reiniciarJuego() {
    //ⓘ LLamar función para limpiar en input.
    limpiarCaja();
    //ⓘ LLamar función para condiciones iniciales del juego.
    condicionesIniciales();
    //ⓘ Deshabilitar el botón de nuevo juego otra forma.
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

//ⓘ Ejecutar al iniciar la página HTML.
condicionesIniciales();

//ⓘ ̨̣͕͉̫̜ͅÏ̗̮̪S̖̜͚͉̜̽͌R̞̟͌̊̾̋Ä̤́̂̚E̺̭̹͖͆̈͋̈́̈́͑̋͑͑ͅL̀ D̽Ä̤̝̦́̂̚ȚͬÄ̤́̂̚ 
