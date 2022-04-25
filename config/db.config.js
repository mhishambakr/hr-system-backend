module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'Root_123',
    DB: 'hr_system',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        aquire: 30000,
        idle: 10000
    }
}