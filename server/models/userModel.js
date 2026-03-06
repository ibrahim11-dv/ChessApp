const db = require('../config/db')
const bcrypt = require('bcryptjs')


const findBy = async (userNameorEmail)=>{
    try {
        const query = 'SELECT * FROM users WHERE username = ? OR email = ?';
        const [rows] = await db.query(query, [userNameorEmail, userNameorEmail]);
        return rows[0];
    } catch (error) {
        console.error('Error finding user:', error);
        throw error;
    }

}
const create = async (username, email, password) =>{
    try{
        const hashedPass = await bcrypt.hash(password, 10)

        const sql = "INSERT INTO users (username, email, password) VALUES (?,?,?)"

        const [result] = await db.query(sql, [username, email, hashedPass])
        return {
            id : result.insertId,
            username,
            email
        }

    }catch(err){
        console.error("can't create user ", err)
        throw err
    }
}
const isUserExist = async (username,email)=>{
    try{
        const sql = "SELECT * FROM users WHERE username = ? or email = ?"
        const [res] = await db.query(sql, [username,email])
        return res.length > 0
    }catch(err){
        console.error("error finding user ",err)
        throw err
    }
}


const User = {
    findBy,
    create,
    isUserExist
}
module.exports = User