const { upsertAttendance, findAllAttendance } = require("../services/Attendance.service")

exports.getAttendance = async (req,res) => {
    try {
        let attendance = await findAllAttendance()

        res.status(200).json({
            message: 'Attendance updated successfully',
            data: {
                attendance
            }
        })
    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message || 'Server Error: Something went wrong'
        })
    }
}

exports.upsertAttendance = async (req, res) => {
    try {
        let { attendances } = req.body;
        let data = await upsertAttendance({ attendances })

        res.status(200).json({
            message: 'Attendance updated successfully',
            data: {
                data
            }
        })
    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message || 'Server Error: Something went wrong'
        })
    }
}