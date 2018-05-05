var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET todo listing. */
router.get('/', function(req, res, next) {

  model.Estudiante.findAll({})
       .then(estudiantes => res.json({
           error: false,
           data: estudiantes
       }))
       .catch(error => res.json({
           error: true,
           data: [],
           error: error
       }));

});


/* POST todo. */
router.post('/crear', function(req, res, next) {

  const {
        id_estudiante,
        nombres,
        apellidos,
        edad,
        sexo,
        direccion,
        telefono,
        acudiente

    } = req.body;
    model.Estudiante.create({

            id_estudiante: "1060",
            nombres:"Andres",
            apellidos:"Gomez",
            edad:21,
            sexo:"M",
            direccion:"Calle 6",
            telefono:"320627",
            acudiente:"Alexandra"
        })
        .then(estudiante => res.status(201).json({
            error: false,
            data: estudiante,
            message: 'Nuevo estudiante creado!.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));

});


/* update todo. */
router.put('/editar/:id_estudiante', function(req, res, next) {

  const id_estudiante = req.params.id;

    const {
      nombres,
      apellidos,
      edad,
      sexo,
      direccion,
      telefono,
      acudiente
    } = req.body;

    model.Todo.update({

      nombres:"Alejo",
      apellidos:"Gomez",
      edad:21,
      sexo:"M",
      direccion:"Calle 6",
      telefono:"320627",
      acudiente:"Andrea"
        }, {
            where: {
                id_estudiante: id_estudiante
            }
        })
        .then(todo => res.status(201).json({
            error: false,
            message: 'Datos del estudiante actualizados!.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));

});


/* GET todo listing. */
router.delete('/borrar/:id_estudiante', function(req, res, next) {

  const id_estudiante = req.params.id;

   model.Todo.destroy({ where: {
       id_estudiante: id_estudiante
   }})
       .then(status => res.status(201).json({
           error: false,
           message: 'Estudiante borrado.'
       }))
       .catch(error => res.json({
           error: true,
           error: error
       }));

});

module.exports = router;
