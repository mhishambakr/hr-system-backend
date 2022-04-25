const { createEmployee, updateEmployee } = require("../validations/Employee.validation");

exports.createEmployeeValidation = async (req, res, next) => {
    try {
        await createEmployee.validateAsync(req.body)

        next()
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

exports.updateEmployeeValidation = async (req, res, next) => {
    try {
        await updateEmployee.validateAsync(req.body)

        next()
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}
