//variables
var resultado = document.getElementById("resultado");
var totalCaja  = document.getElementById("cantidadTotal");
var b = document.getElementById("extraer");
var s = document.getElementById("sesiones");
b.addEventListener("click", entregarDinero);
window.addEventListener("load", calcularDineroCaja);
var vacio=" ";
var numeroSesion = 1;

var imagenes = [];
imagenes["cien"] = "billeteCien.png";
imagenes["cincuenta"] = "billeteCincuenta.png";
imagenes["veinte"] = "billeteVeinte.png";
imagenes["diez"] = "monedaDiez.png";

var caja = [];
caja.push( new Billete("cien", 100, 10) );
caja.push( new Billete("cincuenta", 50, 10) );
caja.push( new Billete("veinte", 20, 30) );
caja.push( new Billete("diez", 10, 90) );

var entregado = [];
var dineroCaja = 0;
var dinero = 0;
var div = 0;
var papeles = 0;

//funciones
function entregarDinero(){
  entregado = [];
  dinero = parseInt(document.getElementById("dinero").value);

  for(var bi of caja){
    if(dinero > 0){
      div = Math.floor(dinero / bi.valor);

      if(div > bi.cantidad){
        papeles = bi.cantidad;
      } else{
        papeles = div;
      }

      entregado.push( new Billete(bi.nombre, bi.valor, papeles) );
      dinero -= (bi.valor * papeles);
    }
  }

  resultado.innerHTML=vacio;

  if(dinero > 0){
    resultado.innerHTML = "No hay lana, camarada";
  }
  else{
    contadorSesiones();
    for(var e in entregado){

      if(entregado[e].cantidad > 0){
        s.innerHTML += entregado[e].cantidad + " billetes de $" + entregado[e].valor + "<br />";
        entregado[e].mostrar();
        resultado.innerHTML += " x" + entregado[e].cantidad + "<br />";
        caja[e].cantidad = caja[e].cantidad - entregado[e].cantidad;
      }

    }
    calcularDineroCaja();
  }
}

function calcularDineroCaja() {
  dineroCaja=0;
  for(var x of caja){
    dineroCaja += x.valor*x.cantidad;
  }
  totalCaja.innerHTML = dineroCaja;
}

function contadorSesiones(){
  s.innerHTML += "<hr />";
  s.innerHTML += "sesion " + numeroSesion + ": <br />";
  numeroSesion++;
}
