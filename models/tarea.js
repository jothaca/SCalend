'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tarea = sequelize.define('Tarea', {
    id_tarea: DataTypes.STRING,
    materia: DataTypes.STRING,
    fecha_asignacion: DataTypes.DATE,
    fecha_limite: DataTypes.DATE,
    valor: DataTypes.INTEGER
  }, {});
  Tarea.associate = function(models) {
    // associations can be defined here
  };
  return Tarea;
};