const knex = require('knex');
const db = require('../dbConfig.js');

module.exports = {
    get,
    getById,
    getUsersList,
    // addSubcategory,
    addUser
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
            'u.id as userId',
            'u.username',
            's.id as subcat_id', 
            's.subcat_name',
            'c.id as cat_id', 
            'c.category_name',
            )
        .where('tl.user_id', userId);
}

function addUser(user) {
    return db('users')
        .insert(user)
}



// function addSubcategory(userid, obj){
//     return db('top_list')
//         .where('user_id', userid)
//         .insert(obj)
//         .then(([id]) => this.get(id));
// }

// function removeSubcategory(userid, subcat_id){
//     return db('top_list')
//         .where('subcat_id', id)
// }