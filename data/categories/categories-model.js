const knex = require('knex');
const db = require('../dbConfig.js');

module.exports = {
    get,
    getById,
    getSubCategories
}

//get all
function get() {
    return db('category');
}

//get category by id
function getById(id) {
    return db('category')
        .where({ id })
        .first();
}

function getSubCategories(catid){
    return db('subcategory as s')
        .join('category as c', 'c.id', 's.cat_id')
        .select('s.id', 's.subcat_name', 'c.category_name as Category')
        .where('s.cat_id', catid);
}
