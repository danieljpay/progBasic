//variables eventos
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

//variable canvas
var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
var colorBordes = "red";

//bordes canvas
dibujarLinea(colorBordes, 0, 299, 1, 1);
dibujarLinea(colorBordes, 299, 299, 1, 299);
dibujarLinea(colorBordes, 1, 1, 1, 299);
dibujarLinea(colorBordes, 1, 299, 299, 299);

//funciones
function dibujarLinea(color, xInicial, xFinal, yInicial, yFinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick(){
  var xxx = parseInt(texto.value);
  var lineas = xxx;
  var l = 0;
  var yi, xf, yi2, xf2;
  var colorcito = "#AAF";
  var espacio = ancho / lineas;

  //dibuja xxx líneas cruzadas
  for(l; l<lineas; l++) {
      yi = espacio*l;
      xf = espacio*(l+1);
      yi2 = ancho - (espacio*l);
      xf2 = ancho - (espacio*(l+1));
      dibujarLinea(colorcito, ancho, xf2, yi2, 0);
      dibujarLinea(colorcito, 0, xf, yi, ancho);
  }
}
