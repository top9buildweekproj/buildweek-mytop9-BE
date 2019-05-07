
const db = require('../dbConfig');
const categories = require('../categories/categories-model');

describe('Category Model', () => {
    beforeEach(() => {
        return db('category').truncate();
    })

    describe('get', () => {
        it('should return all categories', async() => {
            await db.get();

            const cat = await db('category');

            expect(cat.length).toBe(12);
        })
    })
})
