const express = require("express")
const path = require('path')
const app = express()
const axios = require('axios')
const Radis = require('redis')
const cors = require('cors')


const client = Radis.createClient({
    socket: {
        host: '127.0.0.1',
        port: '6379'
    }
})

app.use(express.json())
app.use(cors())

app.get('/photos', async (req, res) => {

    const ablumId = req.query.ablumId

    client.get('photos', async (error, photos) => {
        if (error) console.log(error)
        if (photos != null) {
            res.send(JSON.parse(photos))
        } else {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos', { params: { ablumId } })
            console.log(data)
            client.setEx('photos', 3600, json.stringify(data))
        }
        res.send(data)
    })
})

// client.setEx('get-value', 3600, getdata)
const allRoutes = require('./routes')
const { log } = require("console")
const { json } = require("sequelize")


require('./models')


app.use(express.json())

// app.use(upload({
//     // tempFileDir: path.join(__dirname,'../public')
// }))

app.use('/api/v1/', allRoutes)



app.listen(3000, () => console.log('server listing'))