const express = require("express")
const path = require('path')
const app = express()
const axios = require('axios')
const Radis = require('redis')
const cors = require('cors')

// const client = Radis.createClient({
//     socket: {
//         host: '127.0.0.1',
//         port: '6379'
//     }
// })

app.use(express.json())
app.use(cors())

console.log(path.join(__dirname, './template'));

const allRoutes = require('./routes')

require('./models')

app.use(express.json())

app.use('/api/v1/', allRoutes)

app.listen(3000, () => console.log('server listing'))