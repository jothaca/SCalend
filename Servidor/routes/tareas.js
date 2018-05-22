var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET users listing. */
router.get('/', function(req, res, next) {

  model.Tarea.findAll({})
    .then(tareas => res.json({
      error : false,
      data : tareas
    }))
    .catch(error =>res.json({
      error : true,
      data : [],
      error : error

    }));

});

router.post('/crear',function(req, res, next){

  const {
    titulo,
    descripcion,
    grado,
    materia
  } = req.body;

  model.Tarea.create({
    titulo:titulo,
    descripcion:descripcion,
    grado:grado,
    materia:materia
  })
  .then(tarea => res.status(201).json({
      error : false,
      data : tarea,
      message: 'Nueva tarea creada.!'
  }))
  .catch(error => res.json({
      error : true,
      data : [],
      error : error

  }));
});



module.exports = router;
