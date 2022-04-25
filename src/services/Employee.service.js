const { Employee } = require("../models")

exports.createEmployee = async ({ name, mobile, group, t }) => {
    try {
        let [employee, created] = await Employee.findOrCreate({
            where: {
                mobile
            },
            defaults: {
                name,
                mobile,
                group
            },
            transaction: t
        })

        if (!created) {
            throw {
                status: 409,
                message: `Employee with the mobile number ${mobile} already exists`
            }
        }

        return employee;
    } catch (error) {
        throw error
    }
}

exports.updateEmployee = async ({id,name,mobile})=>{
    try {
        let employee = await Employee.findOne({
            where: {
                id
            }
        })

        employee.name = name;
        employee.mobile = mobile;

        let res = await employee.save();

        return res;
    } catch (error) {
        throw error;
    }
}

exports.findAllEmployees = async ({ }) => {
    try {
        let employees = await Employee.findAndCountAll({
            attributes: ['id', 'name', 'group', 'mobile']
        });

        return employees;
    } catch (error) {
        throw error;
    }
}