const generateUniqueId = require('../utils/generateUniqueId')
const conn = require('../database/connection');

module.exports = {
    async index(req, res){
        const users = await conn('users').select('*');
    
        return res.json(users);
    },
    async create(req, res){
        const { name, email, whatsapp, city, uf } = req.body;

        const id = generateUniqueId();
    
        await conn('users').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
    
        return res.json({
           id
        });
    },
    async delete(req, res){
        const { email } =  request.params;

        await conn('users').where('email', email).delete();

        return res.status(204).send();
    }
};