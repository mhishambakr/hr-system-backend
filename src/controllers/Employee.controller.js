const Sequelize = require("sequelize");
const { sequelize } = require("../models");
const { createEmployee, findAllEmployees, updateEmployee } = require("../services/Employee.service");
const { createUser } = require("../services/User.service");


exports.createEmployee = async (req, res) => {
    const t = await sequelize.transaction()
    try {
        let { name, mobile, group, username, password } = req.body;
        let employee = await createEmployee({ name, mobile, group, t });
        let user = await createUser({ username, password, EmployeeId: employee.id, t });

        await t.commit()

        res.status(200).json({
            message: 'Employee Created Successfully',
            data: {
                employee,
                user
            }
        })
    } catch (error) {
        await t.rollback()
        res.status(error.status || 500).json({
            message: error.message || 'Server Error: Something went wrong'
        })
    }
}

exports.findAllEmployees = async (req, res) => {
    try {
        let employees = await findAllEmployees({});

        res.status(200).json({
            message: 'Employee Created Successfully',
            data: {
                employees
            }
        })
    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message || 'Server Error: Something went wrong'
        })
    }
}

exports.updateEmployee = async (req, res) => {
    try {
        let { id, name, mobile } = req.body;
        let employee = await updateEmployee({ id, name, mobile });

        res.status(200).json({
            message: 'Employee Updated Successfully',
            data: {
                employee
            }
        })
    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message || 'Server Error: Something went wrong'
        })
    }
}
