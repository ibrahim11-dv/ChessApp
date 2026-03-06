const User = require('../models/userModel')
const bcrypt = require('bcryptjs')

const login = async (req,res)=>{
    try{
        const {username , password } = req.body

        if(!username || !password){
            return res.status(400).json({
                message : "Please enter all fields !!"
            })
        }
        const user = await User.findBy(username)
        if(!user){
            return res.status(401).json({
                message : "Invalid credentials !!"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({
                message: 'Invalid credentials !! '
            });
        }
        const userResponse = {
            id : user.id,
            username : user.username,
            email : user.email
        }
        req.session.user = userResponse
        res.json({
            message: 'Login successful ',
            user: userResponse
        });
    }catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            message: 'An error occurred during login'
        });
    }
    
}
const register = async(req,res)=>{
    try{
        const { username, email, password} = req.body
        if( !username || !email || !password)
            return res.status(400).json({
                message : "Please enter all fields !!"
            })
        const exists = await User.isUserExist(username, email)
        if (exists){
            return res.status(400).json({
                message : "user already exists"
            })
        }
        const user = await User.create(username, email, password)
        res.status(201).json({
            message : "user created !!",
            user : user
        })
    }catch(err){
        console.error("error during registration ", err)
        res.status(500).json({
            message: 'An error occurred during registration'
        });
    }
}
const logout = (req,res)=>{
    res.session.destroy((err)=>{
        if(err){
            return res.status(500).json({
                message : 'error loggin out'
            })
        }
        res.json({
            message: 'Logged out successfully'
        });
    })
}

const authController = {
    login,
    register,
    logout
}

module.exports = authController