// JavaScript & EcmaScript ES6

/**
 * Constantes
 */

const SALUDO ='Hola ';
//const SALUDO ='Hello ';

/**
 * Variables
 */


var nEdad = 12;
var sCantaor1 = "Pepe 'El Lebrijano'"
var sCantaor2 = 'Juan "El Habichuela"'

var esBueno = true;
var esMalo = false;

var queSoy; 
queSoy = esMalo; 

var sGrupo = `<ul>
                <li>${sCantaor1}</li>
                <li>${sCantaor2}</li>
              </ul>
            `

sCantaor1 = "";

// OPERADORES + - * / ^

//Division
var x = 13 / 3;
// Módulo o resto
var y = 13 ^ 3

// Acceso al Node btn1 del DOM
var oBtn1 = document.querySelector('#btn1');
// Acceso al Node nombre del DOM
var oNombre = document.querySelector('#nombre');
// Acceso al Node nombre del DOM
var oEdad = document.querySelector('#edad');
// Acceso al Node respuesta del DOM
var oRespuesta = document.querySelector('#respuesta')

/**
 * Funciones
 */

function saludar () {
    let sSaludo = SALUDO
    let nEdad = oEdad.value;
    sSaludo += oNombre.value;
    oRespuesta.innerHTML = "<b>"+ sSaludo + "</b>";
    oRespuesta.innerHTML += sGrupo;
    oRespuesta.innerHTML += +nEdad+2;

}

oBtn1.onclick = saludar;


console.dir(oBtn1);
console.dir(oNombre);
console.dir(oRespuesta);
