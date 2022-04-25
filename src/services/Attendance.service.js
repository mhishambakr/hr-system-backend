const { Attendance, Employee } = require("../models");

exports.findAllAttendance = async () => {
    try {
        let attendance = await Attendance.findAndCountAll({
            order: [
                ['date', 'ASC'],
                ['id', 'ASC']
            ],
            include: [{
                model: Employee
            }]
        })

        let obj = attendance.rows.reduce(function (rv, x) {
            (rv[x['date']] = rv[x['date']] || []).push(x);
            return rv;
        }, {});

        let arr = Object.keys(obj).map(day=>{
            return {
                date: day,
                employees: obj[day]
            }
        })
        attendance.rows = arr;

        return attendance;
    } catch (error) {
        throw error;
    }
}

exports.upsertAttendance = async ({ attendances }) => {
    try {
        attendances = attendances.map(userAttendance => {
            return {
                ...userAttendance,
                date: new Date(userAttendance.date)

            }
        })

        let response = await Attendance.bulkCreate(attendances, {
            updateOnDuplicate: ['isPresent']
        })

        return response;

    } catch (error) {
        throw error;
    }
}