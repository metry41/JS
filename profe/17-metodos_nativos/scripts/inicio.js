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

oCantaor1 = new String(sCantaor1)


console.log(sCantaor1.length)

let dosCantaores = sCantaor1.concat(sCantaor2)

console.log(dosCantaores)

let aPalabras = dosCantaores.split(" ")

let newCadena = aPalabras.join(" ")

console.log(String.fromCharCode(67));

console.log(aPalabras)
console.log(newCadena)

let n = Math.random()*10;
console.log(n)
console.log(Math.ceil(n))
console.log(Math.round(n))
console.log(Math.floor(n))


let aPoints = [40, 100, 1, 5, 25, 10];
let aPointCopia =  []

for (var i = 0; i < aPoints.length; i++) {
    aPointCopia [i] = aPoints[i];
    
}

aPoints.sort(function(a, b){return b-a})
console.log(aPoints)
console.log(aPointCopia)
