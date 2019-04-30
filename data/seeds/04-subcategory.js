
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('subcategory').del()
    .then(function () {
      // Inserts seed entries
      return knex('subcategory').insert([
        { subcat_name: 'Action', cat_id: '1', imageUrl: '../resources/subcat/actionmovie.jpg' },//1
        { subcat_name: 'Comedy', cat_id: '1', imageUrl: '../resources/categories/comedymovie.jpg' },//2
        { subcat_name: 'Console Games', cat_id: '2', imageUrl: '../resources/categories/console.jpg' },//3
        { subcat_name: 'PC Games', cat_id: '2', imageUrl: '../resources/categories/pcgame.jpg' },//4
        { subcat_name: 'Foreign', cat_id: '3', imageUrl: '../resources/categories/forcars.jpg' },//5
        { subcat_name: 'Domestic', cat_id: '3', imageUrl: '../resources/categories/domcars.jpg' },//6
        { subcat_name: 'Football', cat_id: '4', imageUrl: '../resources/categories/football.jpg' },//7
        { subcat_name: 'Soccer', cat_id: '4', imageUrl: '../resources/categories/soccer.jpg' },//8
        { subcat_name: 'Game of Thrones', cat_id: '5', imageUrl: '../resources/categories/got.jpeg' },//9
        { subcat_name: 'Walking Dead', cat_id: '5', imageUrl: '../resources/categories/walkingdead.jpg' },//10
        { subcat_name: 'Doctor Who', cat_id: '6', imageUrl: '../resources/categories/docwho.jpg' },//11
        { subcat_name: 'The Bodyguard', cat_id: '6', imageUrl: '../resources/categories/bodyguard.jpg' },//12
        { subcat_name: 'Mountains', cat_id: '7', imageUrl: '../resources/categories/mountains.jpg' },//13
        { subcat_name: 'Lakes', cat_id: '7', imageUrl: '../resources/categories/lakes.jpg' },//14
        { subcat_name: 'TVs', cat_id: '8', imageUrl: '../resources/categories/tvs.jpg' },//16
        { subcat_name: 'Computers', cat_id: '8', imageUrl: '../resources/categories/computers.jpg' },//17
        { subcat_name: 'JavaScript', cat_id: '9', imageUrl: '../resources/categories/js.jpg' },//18
        { subcat_name: 'NodeJS', cat_id: '9', imageUrl: '../resources/categories/node js.jpg' },//19
        { subcat_name: 'Doggos', cat_id: '10', imageUrl: '../resources/categories/doggo.jpg' },//20
        { subcat_name: 'Cats', cat_id: '10', imageUrl: '../resources/categories/cats.jpg' },//21
        { subcat_name: 'Adobe CC', cat_id: '11', imageUrl: '../resources/categories/adobecc.jpg' },//22
        { subcat_name: 'Templates', cat_id: '11', imageUrl: '../resources/categories/template.jpg' },//23
        { subcat_name: 'Programming', cat_id: '12', imageUrl: '../resources/categories/coding.jpg' },//24
        { subcat_name: 'Computer Engineering', cat_id: '12', imageUrl: '../resources/categories/compeng.jpg' }//25
      ]);
    });
};
