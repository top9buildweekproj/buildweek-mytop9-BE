const knex = require('knex');
const db = require('../dbConfig.js');

module.exports = {
    get,
    getById,
    getUsersList,
    addSubcategory,
    addUser,
    removeList,
    getBy
}

//get all
function get() {
    return db('users');
}

function getBy(filter) {
    return db('users')
        .where(filter)
        .first();
  }

//get category by id
function getById(id) {
    return db('users')
        .where({ id })
        .first();
}

//grabs all top lists associated with the userId and joins categories and subcategories together
function getUsersList(userId){
    return db('top_list as tl')
        .join('users as u', 'u.id', 'tl.user_id')
        .join('subcategory as s', 's.id', 'tl.sub_id')
        .join('category as c', 'c.id', 'tl.cat_id')
        .select(
            'tl.id as listID',
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

function addSubcategory(userid, changes){
    return db('top_list')
        .where('user_id', userid)
        .insert(changes)
}

function removeList(list_id){
    return db('top_list')
        .where('id', list_id)
        .del()
}