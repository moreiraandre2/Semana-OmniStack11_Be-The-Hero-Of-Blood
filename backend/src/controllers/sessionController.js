const conn = require('../database/connection');

module.exports = {
    async create(req, res){
        const {id} = req.body;

        const user = await conn('users')
            .where('id', id)
            .select('name')
            .first();

        if(!user){
            return res.status(400).json({
                error:"Sorry, No user found with this ID."
            })
        }

        return res.json(user);
    }
}