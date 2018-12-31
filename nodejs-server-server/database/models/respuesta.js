'use strict';
module.exports = (sequelize, DataTypes) => {
  const Respuesta = sequelize.define('Respuesta', {
    respuesta: DataTypes.STRING,
    bandera: DataTypes.BOOLEAN,
    id_pregunta: DataTypes.INTEGER
  }, {});
  Respuesta.associate = function(models) {
    // associations can be defined here
    Respuesta.belongsTo(models.Pregunta,{
      foreignKey:'id_pregunta'
    });
  };
  return Respuesta;
};