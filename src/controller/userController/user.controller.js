const bcrypt = require('bcrypt')
const Responcse = require('../../response')
const UserFunctions = require('../userController/userFunction')
const moment = require('moment/moment')
const { Otp } = require('../../models')
const userFunctions = new UserFunctions()
const response = new Responcse()
class UserController {
    constructor() { }


    createUser = async (req, res) => {
        try {
            const { full_name, email, phone_number, password, confirm_password, role_id, latitudes, longitudes } = req.body
            const checkMail = await userFunctions.checkMailPhone(email)
            if (checkMail) {
                return response.fail('email is already exsiting', {})
            }
            if (password === confirm_password) {
                const userData = await userFunctions.addUser({
                    full_name,
                    email,
                    phone_number,
                    password,
                    role_id,
                    latitudes,
                    longitudes,
                });
                console.log(userData);

                if (userData) {
                    return response.success('user create sucessfully', userData)
                } else {
                    return response.fail('User create fail', [])
                }
            } else {
                return response.fail('both password dont match', [])
            }

        } catch (error) {
            return response.fail('fali', error)
        }

    }


    login = async (req, res) => {
        const { emailPhone, password } = req.body
        if (!emailPhone || !password) {
            return response.fail('plz fill details', [])
        }

        const checkMail = await userFunctions.checkMailPhone(emailPhone);
        if (checkMail == null) {
            return response.fail("invalid credentials does not exsting", []);
        }

        const passwordMatch = await bcrypt.compare(password, checkMail.dataValues.password)
        if (passwordMatch == true) {
            let loginData = await userFunctions.loginUser({ emailPhone, password });
            if (loginData) {
                return response.success("login sucessfully", loginData);
            } else {
                return response.fail("login fail", []);
            }
        } else {
            return response.fail('password does not match', [])
        }
    }

    getRole = async (req, res) => {
        const getRole = await userFunctions.getRole()
        console.log({ getRole });
        if (getRole) {
            return response.success('Get All User Role', getRole)
        } else {
            return response.fail('Role get fail', [])
        }
    }


    sendOtp = async (req, res) => {
        const { email, type } = req.body

        if (!email || !type) {
            return response.fail('plz fill details', [])
        }

        const checkMail = await userFunctions.checkMail(email)
        if (checkMail) {
            return response.fail('Email already exsiting', [])
        }

        console.log({ email, type });
        const otpCreate = await userFunctions.otpSent({ email, type })
        console.log(otpCreate);
        if (otpCreate) {
            return response.success('Otp sent successfully', otpCreate)
        } else {
            return response.fail('Opt sent to fali', {})
        }

    }

    otpVerify = async (req, res) => {
        const { email, otp } = req.body

        const otpCheck = await userFunctions.otpVerify({ email, otp })
        if (otpCheck) {
            return response.success('Otp verify successfully', {})
        } else {
            return response.fail('Opt verify fali', {})

        }
    }
}

console.log(moment().format('HH:mm:ss YYYY-MM-DD'), moment().add(2, 'minutes').format('HH:mm:ss YYYY-MM-DD'));
if (moment().add(3, 'minutes').format('HH:mm:ss YYYY-MM-DD') < moment().add(2, 'minutes').format('HH:mm:ss YYYY-MM-DD')) {
    console.log('heelo');
} else {
    console.log('bad')
}

module.exports = UserController
