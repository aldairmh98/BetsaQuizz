'use strict';

const Pregunta = require('../database/models').Pregunta;
const Respuesta = require('../database/models').Respuesta;

function crearPregunta(pregunta){
    return Pregunta.create({
        pregunta: pregunta.pregunta
    }).then(
        (response)=>{
            var id = response.get('id');
            console.log(response.get('id'));
            return insertRespuestas(pregunta, id);
        }
    );
}

function insertRespuestas(pregunta, id){
    pregunta.respuestas.map(
        respuesta =>{
            Respuesta.create({
                respuesta: respuesta.respuesta,
                bandera: respuesta.bandera,
                id_pregunta: id
            })
        }
    );
}

function count(){
    return Pregunta.count({
        col: 'Pregunta.id'
    });
}
module.exports={
    crearPregunta,
    count
}