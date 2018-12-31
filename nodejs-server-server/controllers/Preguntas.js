'use strict';

var utils = require('../utils/writer.js');
var Preguntas = require('../service/PreguntasService');

module.exports.createPregunta = function createPregunta (req, res, next) {
  var pregunta = req.swagger.params['pregunta'].value;
  Preguntas.createPregunta(pregunta)
    .then(function (response) {
      utils.writeJson(res, response, 202);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
