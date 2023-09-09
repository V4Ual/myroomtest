const GlobalGeoDataFuncitons = require("../globalGeoData/globalGeoDataFunctions")
const Responcse = require('../../response')
const response = new Responcse()
const globalGeoDataFuncitons = new GlobalGeoDataFuncitons()
class GlobalGeoDataController {
    constructor() { }

    getCountry = async (req, res) => {
        const getCountry = await globalGeoDataFuncitons.getCountry()
        if (getCountry) {
            return response.success('Get All Countries Successfully', getCountry)
        } else {
            return response.fail('Get All Countries fail', [])
        }
    }
    getState = async (req, res) => {
        const countryCode = req.query.countryCode
        const getState = await globalGeoDataFuncitons.getState({ countryCode })
        if (getState) {
            return response.success('Get All getState Successfully', getState)
        } else {
            return response.fail('Get All getState fail', [])
        }
    }
    getCities = async (req, res) => {
        const stateCode = req.query.stateCode
        console.log(stateCode);
        const getCities = await globalGeoDataFuncitons.getCities({ stateCode })
        if (getCities) {
            return response.success('Get All Cities Successfully', getCities)
        } else {
            return response.fail('Get All Cities fail', [])
        }
    }
}


module.exports = GlobalGeoDataController