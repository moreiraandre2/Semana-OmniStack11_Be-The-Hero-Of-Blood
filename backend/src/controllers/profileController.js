const conn = require('../database/connection');

module.exports = {
    async index(req,res){
        const user_id = req.headers.authorization;

        const calendars = await conn('calendar')
            .where('user_id', user_id)
            .select('*');

        return res.json(calendars);
    }
};