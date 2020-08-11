var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x;
var y;
var click = false;

cuadrito.addEventListener("click", guardarPosicion);
cuadrito.addEventListener("mousemove", pintar);

function guardarPosicion(evento){
  if (click == true) {
    click = false;
  }
  else{
    x = evento.offsetX;
    y = evento.offsetY;
    click = true;
  }
}

function pintar(evento){
  colorcito = "blue";
  var xCanvas = evento.offsetX;
  var yCanvas = evento.offsetY;
  if(click == true){
    dibujarLinea(colorcito, x, y, xCanvas, yCanvas, papel);
    x = xCanvas;
    y = yCanvas;
  }

}

//dibujarLinea
function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}
