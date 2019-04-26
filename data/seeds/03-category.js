
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {category_name: 'Movies'},
        {category_name: 'Video Games'},
        {category_name: 'Cars'},
        {category_name: 'Sports'},
        {category_name: 'American TV'},
        {category_name: 'British TV'},
        {category_name: 'Nature'},
        {category_name: 'Technology'},
        {category_name: 'Web Development'},
        {category_name: 'Animals'},
        {category_name: 'UI/UX Design'},
        {category_name: 'Computer Science'},
      ]);
    });
};
