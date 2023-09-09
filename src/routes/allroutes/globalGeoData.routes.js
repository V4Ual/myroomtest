const globalGeoDataRoutes = require('express').Router()
const GlobalGeoDataController = require('../../controller/globalGeoData/globalGeoDataController.js')

const globalGeoDataController = new GlobalGeoDataController()


globalGeoDataRoutes.get('/countries', async (req, res) => {
    const result = await globalGeoDataController.getCountry(req, res)
    res.send(result)
})

globalGeoDataRoutes.get('/states', async (req, res) => {
    const result = await globalGeoDataController.getState(req, res)
    res.send(result)
})

globalGeoDataRoutes.get('/cities', async (req, res) => {
    const result = await globalGeoDataController.getCities(req, res)
    res.send(result)
})






module.exports = globalGeoDataRoutes