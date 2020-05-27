const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
    store: async (req, res) => {
       try {
           const { email, password } = req.body;

           // check if required fields are filled out
           if(!email || !password) {
               return res.status(200).json({message: 'Required field missing'})
           }

           const user = await User.findOne({ email })

           // if no user in the database
           if(!user) {
                return res.status(200).json({message: 'User not found. Do you want to register instead?'})
           }

           // if password matches return user and email to be stored in browser
           if(user && await bcrypt.compare(password, user.password)) {
                const userResponse = {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName, 
                    email: user.email
                }

                return res.json(userResponse)
           } else {
                return res.status(200).json({message: 'User email or password does not match'})
           }
       } catch (error) {
           throw Error(`Error while Authenticating our user ${error}`)
       } 
    }
}