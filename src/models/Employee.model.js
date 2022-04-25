module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("Employees", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        mobile: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        group: {
            type: Sequelize.STRING,
            allowNull: false,
            isIn: [['HR', 'Normal']],
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
    return Employee;
};