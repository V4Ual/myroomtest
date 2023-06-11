const express = require("express")
const path = require('path')
const app = express()
const upload = require('express-fileupload')

const allRoutes = require('./routes')


require('./models')

app.use(express.json())

// app.use(upload({
//     // tempFileDir: path.join(__dirname,'../public')
// }))

app.use('/api/v1/', allRoutes)



app.listen(3000, () => console.log('server listing'))