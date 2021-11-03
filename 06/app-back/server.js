const express = require('express')
const cors = require('cors')

const app = express()
const corsOptions = {
    origine:'http:app-front.docker.localhost',
    optionsSuccesStatus: 200
}
app.use(cors(corsOptions))
app.use(express.json())

app.route('/').get((req, res) => {
    res.send(200, {
        message:" hello from docker :) "
    })
})