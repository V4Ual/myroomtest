const route = require('express').Router()
const userRouter = require('./allroutes/user.routes')
const roomRouter = require('./allroutes/room.routes')
const globalGeoDataRoutes = require('./allroutes/globalGeoData.routes')
const tenantRoutes = require('./allroutes/tenant.routes')

route.use('/user', userRouter)
route.use('/room', roomRouter)
route.use('/global-geo-data', globalGeoDataRoutes)
route.use('/tenant', tenantRoutes)



module.exports = route