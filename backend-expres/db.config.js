const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('sistem_kariawan', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize