const joi = require('joi')

exports.loginValidation = joi.object({
    username: joi.string().alphanum().required(),
    password: joi.string().min(8).required(),
})
