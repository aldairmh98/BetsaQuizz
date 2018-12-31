'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pregunta = sequelize.define('Pregunta', {
    pregunta: DataTypes.STRING
  }, {});
  Pregunta.associate = function(models) {
    // associations can be defined here
    Pregunta.hasMany( models.Respuesta, {
      foreignKey: 'id_pregunta',
      as: 'respuestas'
    })
  };
  return Pregunta;
};