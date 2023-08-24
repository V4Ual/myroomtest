const bcrypt = require('bcrypt')
const dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')
const db = require('../../models')
const moment = require('moment')
const { Op } = require('sequelize')
const EmailServices = require('../../services/emailServices')
const JWT_SCRECT_KEY = process.env.JWT_SCRECT_KEY

console.log({ JWT_SCRECT_KEY });
const Users = db.Users
const Roles = db.Roles
const Otp = db.Otp



class UserFunctions {
    constructor() { }

    checkMailPhone = async (email) => {
        const checkMail = await Users.findOne(
            {
                where: { [Op.or]: [{ email: email }, { phone_number: email }] }
            }
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

    loginUser = async ({ emailPhone, password }) => {
        const user = await Users.findOne({
            where: { [Op.or]: [{ email: emailPhone }, { phone_number: emailPhone }] }
        })

        const token = jwt.sign({ emailPhone, password }, JWT_SCRECT_KEY, {
            expiresIn: 86400
        })

        user.dataValues.token = token
        if (user) {
            return user
        } else {
            return null
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




    otpSent = async ({ email, type }) => {
        const otp = Math.floor(1000 + Math.random() * 9000);
        const otpCreate = await Otp.create({
            email,
            otp: otp,
            status: true,
            time: moment().add(2, 'minutes').utc().local()
        })
        const emailServices = new EmailServices()
        const Email = {
            email: email,
            otp: otp
        }
        await emailServices.sentMail(Email)
        if (otpCreate) {
            return otpCreate
        } else {
            return null
        }
    }
    otpVerify = async ({ email, otp }) => {
        const findOtp = await Otp.findAll({
            where: {
                otp: otp,
                email: email,
                time: {
                    [Op.gt]: moment().utc().local()
                }

            },
            order: [["time", 'ASC']],
            limit: 1
        })
        console.log(findOtp);
        if (findOtp.length > 0) {
            return findOtp
        } else {
            return null
        }
    }





}

module.exports = UserFunctions