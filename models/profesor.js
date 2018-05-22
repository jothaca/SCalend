'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profesor = sequelize.define('Profesor', {
    id_profesor: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    sexo: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING
  }, {});
  Estudiante.associate = function(models) {
    // associations can be defined here
  };
  return Profesor;
};