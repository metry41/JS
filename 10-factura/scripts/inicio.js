let factura = {
		empresa: "Spymar",
		dirección: "C/ Tajamar, 1",
		teléfono: "918888888",
		CIF: "5544L",
		cliente : {
			empresa : "Santa María",
			dirección: "C/ Iglesia, 1",
			teléfono: "918888889",
			CIF: "7788A",
		},
		elementos : [{
				descripción: "camara1",
				cantidad: 1,
				precio: 14,
			},
		],
		información: {
			baseImponible: 0,
			iva: 1.21,
			total: 0,
			formaPago: "contado"
		}
}
			factura.calculaTotal = function() {
				for (let i = 0; i < this.elementos.length; i++) {
					this.informacion.baseImponible += 
          this.elementos[i].cantidad * this.elementos[i].precio;
				}
				this.informacion.total = this.informacion.baseImponible * this.informacion.iva;
			};
			
			factura.muestraTotal = function() {
				this.calculaTotal();
				alert("TOTAL = " + this.informacion.total + " euros");
		};
			
			factura.muestraDatos = function (){
				this.calculaTotal();
				document.write("<p><b>Datos Empresa</b></p>");
				document.write("<ul>");
				for (i in this.empresa) {
				    document.write("<li><span class=Cap>" + i + "</span>: " + this.empresa[i] + "</li>");
				}
				document.write("</ul>");
				
				document.write("<p><b>Datos Cliente</b></p>");

				document.write("<ul>");
				for (i in this.cliente) {
				    document.write("<li><span class=Cap>" + i + "</span>: " + this.cliente[i] + "</li>");
				}
				document.write("</ul>");
				
				document.write("<p><b>Lista de elementos</b></p>");
				document.write("<ul class=elementos>");
				document.write("<li class=elementos>Descripcion</li>");
				document.write("<li class=elementos>Cantidad</li>");
				document.write("<li class=elementos>Precio</li>");
				document.write("</ul>");				
				for(var i=0; i<this.elementos.length; i++){
				    document.write("<ul class=elementos>");
				    for (j in this.elementos[i]) {
				        document.write("<li class=elementos>" + this.elementos[i][j] + "</li>");
				    }
					//document.write("<li class=elementos>" + this.elementos[i].descripcion+"</li>");
					//document.write("<li class=elementos>" + this.elementos[i].cantidad+"</li>");
					//document.write("<li class=elementos>" + this.elementos[i].precio+"</li>");
					document.write("</ul>");		
				};
				document.write("<p><b>Total a pagar</b></p>");
				document.write("<ul>");
				document.write("<li>Importe Total: " + this.informacion.total.toFixed(2)+"</li>");
				document.write("<li>Iva: "+ this.informacion.iva+"</li>");
				document.write("<li>Pago: "+ this.informacion.formaPago+"</li>");
				document.write("</ul>");
			};



document.querySelector("#btn1").onclick = function () {
  document.querySelector("#factura1").innerHTML = 
          factura.muestraDatos();
}





console.log();