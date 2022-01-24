const Joi = require('@hapi/joi');

const userValid = Joi.object({
      username: Joi.string().min(1).max(35).required(),
      first_name: Joi.string().min(1).max(35).required(),
      last_name: Joi.string().min(1).max(35).required(),
      password: Joi.string().min(5).max(20).required(),
      type: Joi.string().min(1).max(10).required()
      /*
      Admin
      Cop
      Driver
      Viewer
      */
});

const ticketValid = Joi.object({
    solved: Joi.bool(),
    type: Joi.number().integer().required(),
    dyue_date: Joi.date(),
    solution: Joi.number().integer(),
    amount: Joi.number().integer()
});

const utypeValid = Joi.object({
    name: Joi.string().max(10)
});

const ttypeValid = Joi.object({
    name: Joi.string().max(100)
});

const ticketsolValid = Joi.object({
    court: Joi.boolean().required,
    date: Joi.date(),
    note: Joi.string().max(256)
});

module.exports = {
    userValid,
    ticketValid,
    utypeValid,
    ttypeValid,
    ticketsolValid
}