
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('top_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('top_list').insert([
        {user_id: '1', cat_id: '1', sub_id: '1'},
        {user_id: '1', cat_id: '2', sub_id: '3'},
        {user_id: '2', cat_id: '5', sub_id: '9'},
        {user_id: '2', cat_id: '3', sub_id: '5'},
        {user_id: '3', cat_id: '4', sub_id: '7'},
        {user_id: '3', cat_id: '7', sub_id: '13'},
        {user_id: '4', cat_id: '9', sub_id: '18'},
        {user_id: '4', cat_id: '10', sub_id: '20'}
      ]);
    });
};
