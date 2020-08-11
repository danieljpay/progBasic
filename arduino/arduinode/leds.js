var jf = requiere("johnny-five");
var circuito =  new jf.Board();

circuito.on("ready", prender);

function prender(){
  var bombillito = new jf.Led(9);
  var rojito = new jf.Led(13)
  bombillito.blink(500);
  rojito.blink(700);
}
