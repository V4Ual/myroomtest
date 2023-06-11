const bcrypt = require('bcrypt')
const dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')
const db = require('../../models')
const JWT_SCRECT_KEY = process.env.JWT_SCRECT_KEY

console.log({ JWT_SCRECT_KEY });
const Users = db.Users
const Roles = db.Roles



class UserFunctions {
    constructor() { }

    checkMail = async (email) => {
        const checkMail = await Users.findOne(
            { where: { email: email } }
        )
        if (checkMail) {
            return checkMail
        } else {
            return null
        }
    }

    addUser = async ({ full_name, email, phone_number, password, role_id, latitudes, longitudes, }) => {

        const userData = { full_name, email, phone_number, password, role_id, latitudes, longitudes, }
        if (password) {
            userData.password = await bcrypt.hash(password, 12)
        }
        const userCreate = await Users.create(userData)
        if (userCreate) {
            return userCreate
        } else {
            return null
        }
    }

    loginUser = async ({ email, password }) => {
        const user = await Users.findOne({
            where: { email: email }
        })

        const token = jwt.sign({ email, password }, JWT_SCRECT_KEY, {
            expiresIn: 86400
        })

        user.dataValues.token = token
        return {
            userDetails: user
        }
    }

    getRole = async () => {
        const getRole = await Roles.findAll()
        if (getRole) {
            return getRole
        } else {
            return null
        }
    }






}

module.exports = UserFunctions