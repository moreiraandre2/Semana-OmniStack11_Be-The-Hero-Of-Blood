const conn = require('../database/connection');

module.exports = {
    async create(req, res){
        const {email} = req.body;

        const user = await conn('users')
            .where('email', email)
            .select('email')
            .first();

        if(!user){
            return res.status(400).json({
                error:"Sorry, No user found with this ID."
            })
        }

        return res.json(user);
    }
}