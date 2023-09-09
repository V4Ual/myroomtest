const db = require('../../models')
const Country = db.Country
const State = db.State
const Cities = db.Cities
class GlobalGeoDataFuncitons {
    constructor() { }

    getCountry = async () => {
        const getCountry = await Country.findOne({
            where: {
                id: 101
            }
        })
        if (getCountry) {
            return getCountry
        } else {
            return null
        }
    }
    getState = async ({ countryCode }) => {
        const getState = await State.findAll({
            where: {
                country_id: 101
            }
        })
        if (getState) {
            return getState
        } else {
            return null
        }
    }
    getCities = async ({ stateCode }) => {
        console.log(stateCode);
        const getCities = await Cities.findAll({
            where: {
                state_id: stateCode
            }
        })
        if (getCities) {
            return getCities
        } else {
            return null
        }
    }
}


module.exports = GlobalGeoDataFuncitons