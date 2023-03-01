const bcrypt = require('bcrypt')
const UsersModel = require('../models/users')

const passwordCheck = async(nip,password) => {
    const users = await UsersModel.findOne({where: {nip: nip}})
    const compare = await bcrypt.compare(password, users.password)
    return {compare, users}
}

module.exports = passwordCheck