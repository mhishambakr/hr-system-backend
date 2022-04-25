const Sequelize = require('sequelize');

const { DB, HOST, USER, PASSWORD, dialect } = require('../../config/db.config');

const sequelize = new Sequelize(
    DB,
    USER,
    PASSWORD,
    {
        host: HOST,
        dialect: dialect,
        operatorsAliases: 'false',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
    }
)

const models = {}

models.Employee = require('./Employee.model')(sequelize, Sequelize);
models.User = require('./User.model')(sequelize, Sequelize);
models.Attendance = require('./Attendance.model')(sequelize, Sequelize);

models.Employee.hasOne(models.User);
models.User.belongsTo(models.Employee);
models.Employee.hasMany(models.Attendance);
models.Attendance.belongsTo(models.Employee);


module.exports = {
    sequelize,
    ...models
}