var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET todo listing. */
router.get('/', function(req, res, next) {

  model.Acudiente.findAll({})
       .then(acudientes => res.json({
           error: false,
           data: acudientes
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
        id_acudiente,
        nombres,
        apellidos,
        edad,
        sexo,
        direccion,
        telefono

    } = req.body;
    model.Acudientes.create({

            id_acudiente: "1",
            nombres:"Magola",
            apellidos:"Rrabalera",
            edad:54,
            sexo:"F",
            direccion:"Calle 6",
            telefono:"320627"
        })
        .then(acudiente => res.status(201).json({
            error: false,
            data: acudiente,
            message: 'Nuevo acudiente creado!.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));

});


/* update todo. */
router.put('/editar/:id_acudiente', function(req, res, next) {

  const id_acudiente = req.params.id;

    const {
      nombres,
      apellidos,
      edad,
      sexo,
      direccion,
      telefono
    } = req.body;

    model.Todo.update({

      nombres:"Don",
      apellidos:"Rogelio",
      edad:49,
      sexo:"M",
      direccion:"Calle 7",
      telefono:"3203242"
        }, {
            where: {
                id_acudiente: id_acudiente
            }
        })
        .then(todo => res.status(201).json({
            error: false,
            message: 'Datos del acudiente actualizados!.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));

});


/* GET todo listing. */
router.delete('/borrar/:id_acudiente', function(req, res, next) {

  const id_acudiente = req.params.id;

   model.Todo.destroy({ where: {
       id_acudiente: id_acudiente
   }})
       .then(status => res.status(201).json({
           error: false,
           message: 'Acudiente borrado.'
       }))
       .catch(error => res.json({
           error: true,
           error: error
       }));

});

module.exports = router;
