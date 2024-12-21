require('dotenv').config()

const JWT_userpassword = process.env.JWT_userpassword
const JWT_adminpassword = process.env.JWT_adminpassword


module.exports = {
    JWT_userpassword,
    JWT_adminpassword
}