
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('top_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('top_list').insert([
        {user_id: '1', cat_name: 'Movies', sub_name: 'British TV'},
        {user_id: '1', cat_name: 'Video Games', sub_name: 'PC Games'},
        {user_id: '2', cat_name: 'American TV', sub_name: 'Game of Thrones'},
        {user_id: '2', cat_name: 'Cars', sub_name: 'Domestic'},
        {user_id: '3', cat_name: 'Sports', sub_name: 'Football'},
        {user_id: '3', cat_name: 'Nature', sub_name: 'Mountains'},
        {user_id: '4', cat_name: 'Web Development', sub_name: 'Javascript'},
        {user_id: '4', cat_name: 'Animals', sub_name: 'Doggos'}
      ]);
    });
};
