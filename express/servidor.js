var express  = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado){
  resultado.send("Estás en inicio");
}

function cursos(peticion, resultado){
  resultado.send("C la come <strong>Jimmy</strong>");
}

aplicacion.listen(8989);
