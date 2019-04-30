

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {category_name: 'Movies', imageUrl: '../resources/categories/movies.jpg'},//1
        {category_name: 'Video Games', imageUrl: '../resources/categories/videogames.jpg'},//2
        {category_name: 'Cars', imageUrl: '../resources/categories/cars.jpg'},//3
        {category_name: 'Sports', imageUrl: '../resources/categories/sports.jpg'},//4
        {category_name: 'American TV', imageUrl: '../resources/categories/amtv.jpg'},//5
        {category_name: 'British TV', imageUrl: '../resources/categories/brit-tv.jpg'},//6
        {category_name: 'Nature', imageUrl: '../resources/categories/nature.jpg'},//7
        {category_name: 'Technology', imageUrl: '../resources/categories/technology.jpg'},//8
        {category_name: 'Web Development', imageUrl: '../resources/categories/webdev.jpg'},//9
        {category_name: 'Animals', imageUrl: '../resources/categories/animals.jpg'},//10
        {category_name: 'UI/UX Design', imageUrl: '../resources/categories/UIUX.jpg'},//11
        {category_name: 'Computer Science', imageUrl: '../resources/categories/compsci.jpg'},//12
      ]);
    });
};
