//vars iniciales
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";
document.addEventListener("keydown", moverCerdo);
var xCerdo = 170;
var yCerdo = 170;

var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
}

var fondo = {
  url: mapa,
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
}

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}

var cantidad = aleatorio(1, 25);
console.log(cantidad);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

//funciones
function cargarFondo(){
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas(){
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollos(){
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdos(){
  cerdo.cargaOK = true;
  papel.drawImage(cerdo.imagen, 170, 170);
}

function moverCerdo(evento){
  var movimiento = 40;
  switch (evento.keyCode) {
    case teclas.LEFT:
      dibujar();
      xCerdo -= movimiento;
      papel.drawImage(cerdo.imagen, xCerdo, yCerdo);
      break;
    case teclas.UP:
      dibujar();
      yCerdo -= movimiento;
      papel.drawImage(cerdo.imagen, xCerdo, yCerdo);
      break;
    case teclas.RIGHT:
      dibujar();
      xCerdo += movimiento;
      papel.drawImage(cerdo.imagen, xCerdo, yCerdo);
      break;
    case teclas.DOWN:
      dibujar();
      yCerdo+=movimiento;
      papel.drawImage(cerdo.imagen, xCerdo, yCerdo);
  }
}

function dibujar(){
  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK) {
    var aux = cantidad;
    for(var v=0; v < cantidad; v++){
      var x = aleatorio(0, 7);
      var y = aleatorio (0, 7);
      x = x*60;
      y = y*60;
      papel.drawImage(vaca.imagen, x, y);
    }
    cantidad = aux;
  }
  if (pollo.cargaOK) {
    var aux = cantidad;
    for(var v=0; v < cantidad; v++){
      var x = aleatorio(0, 7);
      var y = aleatorio (0, 7);
      x = x*60;
      y = y*60;
      papel.drawImage(pollo.imagen, x, y);
    }
    cantidad = aux;
  }
}

function aleatorio(min, max){
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
