var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET todo listing. */
router.get('/', function(req, res, next) {

  model.Tareas.findAll({})
       .then(tareas => res.json({
           error: false,
           data: tareas
       }))
       .catch(error => res.json({
           error: true,
           data: [],
           error: error
       }));

});


/* POST todo. */

  const {
        id_tarea,
        materia,
        fecha_asignacion,
        fecha_limite,
        valor

    } = req.body;
    model.Tarea.create({

        id_tarea:"123",
        materia:"Etica y valores",
        fecha_asignacion:"28/07/2009",
        fecha_limite"04/08/2009",
        valor: 30
        })
        .then(tarea => res.status(201).json({
            error: false,
            data: tarea,
            message: 'Nueva tarea creada!.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));

});


/* update todo. */
router.put('/editar/:id_tarea', function(req, res, next) {

  const id_tarea = req.params.id;

    const {
        id_tarea,
        materia,
        fecha_asignacion,
        fecha_limite,
        valor
    } = req.body;

    model.Todo.update({
        materia:"Religion",
        fecha_asignacion:"29/07/2009",
        fecha_limite"03/08/2009",
        valor: 30
        }, {
            where: {
                id_tarea: id_tarea
            }
        })
        .then(todo => res.status(201).json({
            error: false,
            message: 'Tarea actualizada!.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));

});


/* GET todo listing. */
router.delete('/borrar/:id_tarea', function(req, res, next) {

  const id_tarea = req.params.id;

   model.Todo.destroy({ where: {
       id_tarea: id_tarea
   }})
       .then(status => res.status(201).json({
           error: false,
           message: 'Tarea borrada.'
       }))
       .catch(error => res.json({
           error: true,
           error: error
       }));

});

module.exports = router;
