// Ejemplo de código en ES6

class Libro {}

class LibroTecnico extends Libro {  
    constructor(tematica, paginas) {
        super(tematica, paginas);
        this.capitulos = [];
        this.precio = "";
        // ...
    }
    metodo(pValor = "foo") {
        // ...
    }
}


var data = [{precio: 12}, {precio: 34}, {precio: 19}];  
data.forEach(elem => {
    if (true) {
    const iva = 1.16
    let precioFinal =  elem.precio * iva
    console.log(`Oferta: 
    El precio final es ${precioFinal}`);
    }
});