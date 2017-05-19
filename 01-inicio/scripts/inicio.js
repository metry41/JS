/**
 * variables


const SALUDO ="Hola "

// esto es un comentario en linea
//Acceso al Node btn1 del DOM
var oBtn1 = document.querySelector("#btn1");
//Acceso al Node del nombre del DOM
var oNombre = document.querySelector("#nombre");
//Acceso al Node respuesta del DOM
var oRespuesta = document.querySelector("#respuesta")


/**function saludar () {
    let sNombre = oNombre.value;
    alert(SALUDO + sNombre);}

function saludar () {
    let sSaludo = SALUDO
    sSaludo += oNombre.value;
    oRespuesta.innerHTML = "<b>"+ sSaludo + "</b>";
}

oBtn1.onclick = saludar;

console.dir(oBtn1);
console.dir(oNombre);
console.dir(oRespuesta);
18/05/2017 
*/






// JavaScript & EcmaScript ES6

/**
 * Constantes
 */

const SALUDO ='Hola ';
//const SALUDO ='Hello ';

/**
 * Variables y tipos de datos
 */


// Number
var nEdad = 12;
// String
var sCantaor1 = "Pepe 'El Lebrijano'"
var sCantaor2 = 'Juan "El Habichuela"'
// Boolean
var esBueno = true;
var esMalo = false;
// Undefined
var queSoy; 
// Null (Object)
var oDatos = {}


// Object
var oDatos = {
  nombre: "Pepe",
  apellido: "PÃ©rez",
  edad: 23,
  nacionalidad: "Suiza",
  esVaron : true,
  direccion : {
    calle: "",
    numero:"",
    poblacion: "",
    cp: "",
    pais: ""
  }
}

console.dir(nEdad);
console.dir(sCantaor1);
console.dir(oDatos);

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
// MÃ³dulo o resto
var y = 13 ^ 3




console.dir(nEdad);
console.dir(sCantaor1);
console.dir(oDatos);