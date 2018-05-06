var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET todo listing. */
router.get('/', function(req, res, next) {

  model.Profesor.findAll({})
       .then(profesor => res.json({
           error: false,
           data: profesor
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
        id_profesor,
        nombres,
        apellidos,
        edad,
        sexo,
        direccion,
        telefono

    } = req.body;
    model.Profesor.create({

            id_profesor: "1010",
            nombres:"El profesor",
            apellidos:"jorafales",
            edad:48,
            sexo:"M",
            direccion:"Vecindad #12 esquina",
            telefono:"312421351"
        })
        .then(profesor => res.status(201).json({
            error: false,
            data: profesor,
            message: 'Nuevo profesor creado!.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));

});


/* update todo. */
router.put('/editar/:id_profesor', function(req, res, next) {

  const id_profesor = req.params.id;

    const {
      nombres,
      apellidos,
      edad,
      sexo,
      direccion,
      telefono
    } = req.body;

    model.Todo.update({

      nombres:"julio",
      apellidos:"profe",
      edad:39,
      sexo:"M",
      direccion:"Calle 6",
      telefono:"320627"
        }, {
            where: {
                id_profesor: id_profesor
            }
        })
        .then(todo => res.status(201).json({
            error: false,
            message: 'Datos del profesor actualizados!.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));

});


/* GET todo listing. */
router.delete('/borrar/:id_profesor', function(req, res, next) {

  const id_profesor = req.params.id;

   model.Todo.destroy({ where: {
       id_profesor: id_profesor
   }})
       .then(status => res.status(201).json({
           error: false,
           message: 'Profesor borrado.'
       }))
       .catch(error => res.json({
           error: true,
           error: error
       }));

});

module.exports = router;
