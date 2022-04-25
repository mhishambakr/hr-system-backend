const employeeRoutes = require('./Employee.routes');
const userRoutes = require('./User.routes');
const attendanceRoutes = require('./Attendance.routes');

module.exports = (app, base) => {
    app.use(`${base}/employee`, employeeRoutes);
    app.use(`${base}/user`, userRoutes);
    app.use(`${base}/attendance`, attendanceRoutes);
}


