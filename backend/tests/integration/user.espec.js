const request = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/database/connection');

describe('User', () => {
    beforeEach(async () => {
        await conn.migrate.rollback();
        await conn.migrate.latest();
    });

    afterAll( async () => {
        await conn.destroy();
    });

    it('should be able to create a new user', async () => {
        const response = await request(app)
        .post('/user')
        .send({
            name:'andre',
            email:'andre@test.com',
            whatsapp:'1900000000000',
            city:'Estiva Gerbi',
            uf:'SP'
        });

        expect(response.data).toHaveProperty('id');
        expect(response.data.id). toHaveLength(8);
    })
})