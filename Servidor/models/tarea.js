'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tarea = sequelize.define('Tarea', {
    titulo: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    tema: DataTypes.STRING,
    logros: DataTypes.STRING,
    grado: DataTypes.STRING,
    materia: DataTypes.STRING,
    fecha_culminacion: DataTypes.DATE,
    archivo: DataTypes.STRING,
    color_fondo: DataTypes.STRING,
    color_texto: DataTypes.STRING
  }, {});
  Tarea.associate = function(models) {
    // associations can be defined here
  };
  return Tarea;
};
