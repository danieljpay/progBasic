var bancoCliente = document.getElementById("bancoCliente");
var cuentaCliente = document.getElementById("cuentaCliente");
var saldoCliente = parseInt(document.getElementById("saldoCliente").value);
var bancoDestino = document.getElementById("bancoDestino");
var cuentaDestino = document.getElementById("cuentaDestino");
var botonTransferir = document.getElementById("botonTransferir");
var cantidadTransfer = 1000;
var verifCliente = true;
var verifDestino = true;
var horaTransfer = 18;
var costoTransaccion = 0;

botonTransferir.addEventListener("click", verificarCondiciones);

function verificarCondiciones(){
  if(verifCliente && verifDestino){
    if(saldoCliente > cantidadTransfer){
      comprobarTransaccion();
    }
  }
}

function comprobarTransaccion(){
  if(bancoCliente.value == bancoDestino.value){
    costoTransaccion = 0;
    comprobarHora();
  }
  else {
    costoTransaccion = 100;
    comprobarHora();
  }
}

function comprobarHora(){
  if(9 < horaTransfer <  12 || 15 < horaTransfer < 20){
    transferir();
  }
}

function transferir(){
  alert("saldo transferido: " + (cantidadTransfer + costoTransaccion) + " a la cuenta " + cuentaDestino.value + " del banco " + bancoDestino.value);
}
