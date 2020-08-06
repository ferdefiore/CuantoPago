const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const Expensas = require('../models/Expensas')

app.use(bodyParser.json());
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.get('*', (req, res) => {
    console.log(req.query.ed)
    Expensas.find({ "Edificio": req.query.ed })
        .exec()
        .then(x => res.send(x))
})

module.exports = app
