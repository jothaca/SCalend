'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tarea = sequelize.define('Tarea', {
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    grado: DataTypes.STRING,
    materia: DataTypes.STRING
  }, {});
  Tarea.associate = function(models) {
    // associations can be defined here
  };
  return Tarea;
};
