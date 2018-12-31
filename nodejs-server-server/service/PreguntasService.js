'use strict';
const Pregunta = require('../repository/Pregunta.repository');

/**
 * Publicaciòn de una nueva pregunta
 * Se deberà mandar un JSON donde contenga la pregunta y sus posibles respuestas
 *
 * pregunta Pregunta La pregunta con sus respuestas
 * no response value expected for this operation
 **/
exports.createPregunta = function(pregunta) {
  return Pregunta.crearPregunta(pregunta);
}

