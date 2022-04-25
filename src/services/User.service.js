const { User, Employee } = require("../models")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { secret } = require("../../config/auth.config");

exports.createUser = async ({ username, password, EmployeeId, t }) => {
    try {
        let hashedPassword = bcrypt.hashSync(password, 8);

        let [user, created] = await User.findOrCreate({
            where: {
                username
            },
            defaults: {
                username,
                password: hashedPassword,
                EmployeeId
            },
            transaction: t
        })

        if (!created) {
            throw {
                status: 409,
                message: `Employee with the username ${username} already exists`
            }
        }

        return user;
    } catch (error) {
        throw error;
    }
}

exports.login = async ({ username, password }) => {
    try {
        let user = await User.findOne({
            where: { username },
            attributes: ['username','password'],
            include: [{
                model: Employee,
                attributes: ["name", "mobile", "group"]
            }]
        })
        if (!user) {
            throw {
                status: 404,
                message: 'this username doesn\'t exist',
            }
        }

        user = user.get({ plain: true })

        var passwordIsValid = bcrypt.compareSync(password, user.password);

        if (!passwordIsValid) {
            throw {
                status: 401,
                message: 'wrong password',
            }
        };

        let token = jwt.sign({ username: user.username }, secret, {
            expiresIn: 86400
        })

        delete user.password

        return { token, user }

    } catch (error) {
        throw error;
    }
}
