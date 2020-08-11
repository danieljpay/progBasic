//variables
var resultado = document.getElementById("resultado");

//clase
class Billete{
  constructor(nombre, v, c){
    this.nombre = nombre;
    this.valor = v;
    this.cantidad = c;
    this.imagen  = new Image();
    this.imagen.src = imagenes[this.nombre];
  }

  mostrar(){
    resultado.appendChild(this.imagen);
  }
  
}
