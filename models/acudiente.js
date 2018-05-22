'use strict';
module.exports = (sequelize, DataTypes) => {
  var Acudiente = sequelize.define('Acudiente', {
    id_acudiente: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    sexo: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
  }, {});
  Acudiente.associate = function(models) {
    // associations can be defined here
  };
  return Acudiente;
};