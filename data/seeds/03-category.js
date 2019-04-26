
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {category_name: 'Movies'},//1
        {category_name: 'Video Games'},//2
        {category_name: 'Cars'},//3
        {category_name: 'Sports'},//4
        {category_name: 'American TV'},//5
        {category_name: 'British TV'},//6
        {category_name: 'Nature'},//7
        {category_name: 'Technology'},//8
        {category_name: 'Web Development'},//9
        {category_name: 'Animals'},//10
        {category_name: 'UI/UX Design'},//11
        {category_name: 'Computer Science'},//12
      ]);
    });
};
