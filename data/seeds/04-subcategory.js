
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('subcategory').del()
    .then(function () {
      // Inserts seed entries
      return knex('subcategory').insert([
        { subcat_name: 'Action', cat_id: '1' },//1
        { subcat_name: 'Comedy', cat_id: '1' },//2
        { subcat_name: 'Console Games', cat_id: '2' },//3
        { subcat_name: 'PC Games', cat_id: '2' },//4
        { subcat_name: 'Foreign', cat_id: '3' },//5
        { subcat_name: 'Domestic', cat_id: '3' },//6
        { subcat_name: 'Football', cat_id: '4' },//7
        { subcat_name: 'Soccer', cat_id: '4' },//8
        { subcat_name: 'Game of Thrones', cat_id: '5' },//9
        { subcat_name: 'Walking Dead', cat_id: '5' },//10
        { subcat_name: 'Doctor Who', cat_id: '6' },//11
        { subcat_name: 'The Bodyguard', cat_id: '6' },//12
        { subcat_name: 'Mountains', cat_id: '7' },//13
        { subcat_name: 'Lakes', cat_id: '7' },//14
        { subcat_name: 'TVs', cat_id: '8' },//16
        { subcat_name: 'Computers', cat_id: '8' },//17
        { subcat_name: 'JavaScript', cat_id: '9' },//18
        { subcat_name: 'NodeJS', cat_id: '9' },//19
        { subcat_name: 'Doggos', cat_id: '10' },//20
        { subcat_name: 'Cats', cat_id: '10' },//21
        { subcat_name: 'Adobe CC', cat_id: '11' },//22
        { subcat_name: 'Templates', cat_id: '11' },//23
        { subcat_name: 'Programming', cat_id: '12' },//24
        { subcat_name: 'Computer Engineering', cat_id: '12' }//25
      ]);
    });
};
