module.exports = (sequelize, Sequelize) => {
    const Attendance = sequelize.define("Attendances", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
            isDate: true
        },
        isPresent: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        }
    }, {
        paranoid: true,
        deletedAt: 'destroyTime'
    });
    return Attendance;
};