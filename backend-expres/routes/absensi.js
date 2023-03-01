const express = require('express')
const router = express.Router()
const absensiModel = require('../models/absensi')

router.get('/', async(req, res) => {
    const absensi = await absensiModel.findAll()
    res.status(200).json({
        absensi,
        metadata: 'tes users absensi endpoint'
    })
})

router.post('/checkin', async(req,res) => {
    const {nip} = req.body
    const absensi = await absensiModel.create({
       users_nip: nip, status: 'in'
    })

    res.status(200).json({
        data: absensi,
        metadata: 'checkin succes ✔'
    })
})

router.post('/checkout', async(req,res) => {
    const {nip} = req.body
    const absensiOut = await absensiModel.create({
        users_nip: nip, status: 'out'
    })
    res.status(200).json({
        data: absensiOut,
        metadata: 'checkout succes ✔'
    })
})

module.exports = router