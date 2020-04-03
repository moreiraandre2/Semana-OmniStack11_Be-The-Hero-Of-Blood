const conn = require('../database/connection');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;

        const [count] = await conn('calendar').count();

        const calendars = await conn('calendar')
            .join('users', 'users.id', '=', 'calendar.user_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['calendar.*', 
                     'users.name', 
                     'users.email', 
                     'users.whatsapp',
                     ]);

        res.header('X-Total-Count', count['count(*)']);//retorna o total de registros no cabeçalho da resposta

        return res.json(calendars);
    },
    async create(req, res){
        const { data, hour, city, uf, place} = req.body;

        const user_id = req.headers.authorization;
    
        const [ id ] = await conn('calendar').insert({
            data,
            hour, 
            city,
            uf,
            place,
            user_id
        });
    
        return res.json({
           id
        });
    },
    async delete(req, res){
        const { id } =  request.params;
        const user_id = req.headers.authorization;
        
        const calendar = await conn('calendar')
            .where('id', id)
            .select('user_id')
            .first();

        if (calendar.user_id != user_id) {
            return res.status(401).json({
                error: "Operation not permitted."
            })
        }

        await conn('calendar').where('id', id).delete();

        return res.status(204).send();
    }
};