const joi = require('joi')


exports.createEmployee = joi.object({
    name: joi.string().lowercase().pattern(/^[a-z ]+$/, { name: 'alphabet' }).required(),
    mobile: joi.string().regex(/^(?:\+)([2])[0]{1}[1]{1}[0-2,5]{1}[0-9]{8}$/).required(),
    group: joi.string().valid('HR', 'Normal').required(),
    username: joi.string().alphanum().required(),
    password: joi.string().min(8).required(),
})

exports.updateEmployee = joi.object({
    id: joi.number().positive().integer(),
    name: joi.string().lowercase().pattern(/^[a-z ]+$/, { name: 'alphabet' }).required(),
    mobile: joi.string().regex(/^(?:\+)([2])[0]{1}[1]{1}[0-2,5]{1}[0-9]{8}$/).required(),
})
