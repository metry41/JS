/**
 * variables
 */

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
*/
function saludar () {
    let sSaludo = SALUDO
    sSaludo += oNombre.value;
    oRespuesta.innerHTML = "<b>"+ sSaludo + "</b>";
}

oBtn1.onclick = saludar;

console.dir(oBtn1);
console.dir(oNombre);
console.dir(oRespuesta);
