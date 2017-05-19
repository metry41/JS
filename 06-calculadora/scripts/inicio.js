function sumar (a,b) {
    return +a + +b
} 

function restar (a,b) {

    return a-b;
}

function multiplicar (a,b) {
    return a*b ;
}


function dividir (a,b) {
   return a/b ;
}



function main () {


    let operar = (pNum1, pNum2, pOp) => {
        if (="s") {
           return sumar(pNum1,pNum2)
        } 
    


    let nNum1 = Number(prompt("Primer número"));
    let sOperacion = prompt("¿Qué operación desea? s=suma r=resta m=multiplica d=divide");
    let nNum2 = Number(prompt("Segundo número"));
    






   
    console.log( (if (sOperacion="s") {
           return sumar
        } 
        else if (sOperacion="r") {
           return restar
        } 
        else if (sOperacion="m") {
           return multiplicar  
        } 
        else if (sOperacion="d") {
           return dividir
        }));
    }
}

// InvocaciÃ³n de la funcion
main()

