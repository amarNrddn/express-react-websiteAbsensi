const express = require('express')
const cors = require('cors')
const port = 3300

const sequelize = require('./db.config')
sequelize.sync().then(() => console.log('data base ready!'))

const usersEndpoit = require('./routes/users')
const usersAbsensi = require('./routes/absensi')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/users', usersEndpoit)
app.use('/absensi', usersAbsensi)

app.listen(port,() => console.log(`server runing on  port ${port}`))

