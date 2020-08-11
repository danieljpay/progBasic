//****vars******
var pizarron = document.getElementById("area_de_dibujo");
var papel = pizarron.getContext("2d);
document.addEventListener("mouseup", levantarMouse);
document.addEventListener("mousedown", presionarMouse);
var xInit, yInit, xFin, yFin;


//*******funciones********
//levantar click del mouse
function levantarMouse(evento){
  xFin=evento.offsetX;
  yFin=evento.offsetY;
  dibujarLinea("blue", xInit, yInit, xFin, yFin, papel);
}

//click
function presionarMouse(evento){
  xInit=evento.offsetX;
  yInit=evento.offsetY;
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
