const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const usersModel = require('../models/users')
const passwordCheck = require('../util/passwordCheck')

router.get('/', async (req, res) => {
    const users = await usersModel.findAll()

    res.status(200).json({
        data: users,
        metadata: "testing user endpoint"
    })
})

router.post('/', async (req, res) => {
    try {
        const { nip, nama, password } = req.body
        const encriptedPassword = await bcrypt.hash(password, 10)

        const users = await usersModel.create({
            nip, nama, password: encriptedPassword
        })
        res.status(200).json({
            data: users,
            metadata: "sucsess add"
        })

    } catch (error) {
        res.status(404).json({
            error: "NIP sudah ada"
        })
    }
})

// udate user password dan nama
router.put('/', async (req, res) => {
    const { nip, nama, password, passwordBaru } = req.body

    try {
        const check = await passwordCheck(nip, password)
        const encriptedPasword = await bcrypt.hash(passwordBaru, 10)

        if (check.compare === true) {
            const users = await usersModel.update({
                nama, password: encriptedPasword
            }, { where: { nip: nip } })

            res.status(200).json({
                users: { updated: users[0] },
                metadata: "data succes di updeat"
            })
        }

    } catch (error) {
        res.status(404).json({
            error: "ada kesalahan"
        })
    }
})

// login
router.post('/login', async (req, res) => {
    const { nip, password } = req.body

    try {
        const check = await passwordCheck(nip, password)

        if (check.compare === true) {
            res.status(200).json({
                users: check.users,
                metadata: "login succes ✔"
            })
        }
    } catch (error) {
        res.status(404).json({
            error: "login gagal cek kembali!"
        })
    }
})

module.exports = router