const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate')

const userController = require('./controllers/userController');
const calendarController = require('./controllers/calendarController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');
const appSessionController = require('./controllers/appSessionController');



const routes = express.Router();

routes.get('/users', userController.index);
routes.post('/users', /* celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(14),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
})*/ userController.create);

routes.post('/session', sessionController.create);
routes.post('/appsession', appSessionController.create);


routes.get('/calendar', /*celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}), */calendarController.index);
routes.post('/calendar', calendarController.create);
routes.delete('/calendar/:id', /*celebrate({
    [Segments.PARAMS]:{
        id: Joi.number().required(),
    }
}), */calendarController.delete);

routes.get('/profile', /*celebrate({
    [Segments.HEADER]:Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}),*/ profileController.index);

module.exports = routes; //usado para exportar uma variavel.