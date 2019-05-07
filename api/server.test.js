const server = require('./server');
const req = require('supertest');


describe('get /', () => {
    it('should return status 200', async() => {
        const res = await req(server).get('/');
            expect(res.status).toBe(200);
    })
    it('should return JSON', async() => {
        const res = await req(server).get('/');
            expect(res.type).toBe('text/html');
    })
    it('should return {}', async() => {
        const res = await req(server).get('/');
            expect(res.body).toEqual({})
    })
})