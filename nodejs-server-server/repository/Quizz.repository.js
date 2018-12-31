'use strict';
const Pregunta = require('../database/models').Pregunta;
const Respuesta = require('../database/models').Respuesta;

function generateQuizz(ids){
    return Pregunta.findAll({
        where: {
            id: ids
        },
        include: [{
            model: Respuesta,
            as: 'respuestas'
        }],
    })
}

module.exports = {
    generateQuizz
}