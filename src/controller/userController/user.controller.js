const bcrypt = require('bcrypt')
const Responcse = require('../../response')
const UserFunctions = require('../userController/userFunction')
const userFunctions = new UserFunctions()
const response = new Responcse()
class UserController {
    constructor() { }


    createUser = async (req, res) => {
        try {
            const { full_name, email, phone_number, password, confirm_password, role_id, latitudes, longitudes } = req.body
            const checkMail = await userFunctions.checkMail(email)
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
        const { email, password } = req.body
        if (!email || !password) {
            return response.fail('plz fill details', [])
        }

        const checkMail = await userFunctions.checkMail(email);
        if (checkMail == null) {
            return response.fail("Email does not exsting", []);
        }

        const passwordMatch = await bcrypt.compare(password, checkMail.dataValues.password)
        if (passwordMatch == true) {
            let loginData = await userFunctions.loginUser({ email, password });
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
}


module.exports = UserController