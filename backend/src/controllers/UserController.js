const User = require('../models/User');
const bcrypt= require('bcrypt');

module.exports = {
    async createUser(req, res) {
        try {
            console.log(req.body);
            const {firstName, lastName, password, email} = req.body;

            const existingUser = await User.findOne({email});

            if(!existingUser) {
                // sets hash password to database for security. The higher the number the bigger the password.
                const hashedPassword = await bcrypt.hash(password, 10)
                const user = await User.create({ 
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword
                })

                return res.json(user)
            }
            
            return res.status(400).json({
                message: 'Email user already exisits! Do you want to login instead'
            })



        } catch (error) {
            throw Error(`Error while registering new user: ${error}`)
        }
    },

    async getUserByID(req, res) {
        const { userId } = req.params;
        console.log(userId)

        try {
            const user = await User.findById(userId);
            return res.json(user)
        } catch (error) {
            res.status(400).json({
                message: 'User ID does not exist. Register here!'
            })
        }
    }
}