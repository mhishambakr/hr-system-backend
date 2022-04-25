const { loginValidation } = require("../validations/User.validation")
const { secret } = require('../../config/auth.config');
const jwt = require('jsonwebtoken');
const { User } = require("../models");


exports.loginValidation = async (req, res, next) => {
    try {
        await loginValidation.validateAsync(req.body)

        next()
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}



exports.userAuthentication = async (req, res, next) => {
    try {
        if (!req?.headers?.authorization) {
            throw {
                status: 401,
                message: 'Unauthorized. Please login first'
            }
        }
        let token = req?.headers?.authorization.split(' ')[1] || ''

        console.log(token);

        let decoded = await jwt.verify(token, secret);

        let user = await User.findOne({
            where: {
                username: decoded.username
            },
            raw: true,
            nest: true,
        })

        res.locals.user = user;

        next();
    } catch (err) {
        res.status(401).json({
            message: err.message
        })
    }
};
