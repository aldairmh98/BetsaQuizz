'use strict';

const Quizz = require('../repository/Quizz.repository');
const Pregunta = require('../repository/Pregunta.repository');
/**
 * Retorna el  cuestionario de forma aleatoria
 * El servidor generarà un quizz de 10 preguntas.
 *
 * returns List
 **/
exports.getQuizz = function() {
  
  var max = 11;
  return Pregunta.count().then(
    (count) =>{
      max = count;
      var ids = getQuizzesIds(1, max);
      return Quizz.generateQuizz(ids);
    }
  ); 
}

function getQuizzesIds(min, max) {
  var ids = [];
  var i = 0;
  var bandera = true;
  
  while (i < 10) { //Mientras no se hayan completado las 10 preguntas, no se terminará el proceso.
    bandera = true; 
    var numerito = Math.round(Math.random() * (max - min) + min); //Obtenemos un número aleatorio en un rango.
    //Verifica que el número no exista en nuestro array de ids 
    for (var j = 0; j < i; j++) {
      if (numerito === ids[j]) {
        bandera = false; //Asigna valor si el número ya existe en nuestro array
        break;
      }
    }
    //Fin
    if (bandera) {
      ids[i] = numerito;
      i++;
    }
  }
  return ids;
}
