


// Declaracion de una funcion
//function sumar () {}

function saludar () {
    let sSaludo = "Hola";
    console.log(sSaludo);
} 

function sumar (a=0, b=0, c=0, d=0) {

    return a+b+c+d;
}

function media () {

    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        
    }
}


function sumarArg () {
    let nResult = 0;
    for (var i = 0; i < arguments.length; i++) {
        nResult += arguments[i];        
    }
   return nResult;
}



//function sumarMal () {
//    return nNum1 + nNum2;
//}

function main () {
    let nNum1 = Number(prompt("Dime un nÃºmero", 12));
    let nNum2 = Number(prompt("Dime otro", 23));
    let nNum3 = +prompt("Dime otro", 3);
    let nNum4 = +prompt("Dime otro", 13);
    
    console.log(media (nNum1, nNum2));
    console.log(media (nNum1, nNum2, nNum3));
    console.log(media (nNum1, nNum2, nNum3, nNum4, 12, 12));    
    console.log(media (12, 23, 12, 23, 45, 32, 12, 54, 32, 65, 76 ));
    
    saludar();
    
}

// InvocaciÃ³n de la funcion
main()

