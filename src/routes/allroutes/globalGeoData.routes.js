const globalGeoDataRoutes = require('express').Router()
const { Authentication } = require('../../services/authServices')
const GlobalGeoDataController = require('../../controller/globalGeoData/globalGeoDataController.js')

const globalGeoDataController = new GlobalGeoDataController()


globalGeoDataRoutes.get('/countries', Authentication, async (req, res) => {
    const result = await globalGeoDataController.getCountry(req, res)
    res.send(result)
})

globalGeoDataRoutes.get('/states', Authentication, async (req, res) => {
    const result = await globalGeoDataController.getState(req, res)
    res.send(result)
})

globalGeoDataRoutes.get('/cities', Authentication, async (req, res) => {
    const result = await globalGeoDataController.getCities(req, res)
    res.send(result)
})






module.exports = globalGeoDataRoutes