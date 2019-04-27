const knex = require('knex');
const db = require('../dbConfig.js');

module.exports = {
    get,
    getById,
    getUsersList
}

//get all
function get() {
    return db('users');
}

//get category by id
function getById(id) {
    return db('users')
        .where({ id })
        .first();
}

function getUsersList(userId){
    return db('top_list as tl')
        .join('users as u', 'u.id', 'tl.user_id')
        .join('subcategory as s', 's.id', 'tl.sub_id')
        .join('category as c', 'c.id', 'tl.cat_id')
        .select(
            'u.id',
            'u.username',
            's.id', 
            's.subcat_name',
            'c.id', 
            'c.category_name',
            )
        .where('tl.user_id', userId);
}