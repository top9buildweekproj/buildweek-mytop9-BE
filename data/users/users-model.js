const knex = require('knex');
const db = require('../dbConfig.js');

module.exports = {
    get,
    getById
}

//get all
function get() {
    return db('users');
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