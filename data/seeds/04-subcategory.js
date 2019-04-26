
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('subcategory').del()
    .then(function () {
      // Inserts seed entries
      return knex('subcategory').insert([
        { subcat_name: 'Action', cat_name: 'Movies' },
        { subcat_name: 'Comedy', cat_name: 'Movies' },
        { subcat_name: 'Console Games', cat_name: 'Video Games' },
        { subcat_name: 'PC Games', cat_name: 'Video Games' },
        { subcat_name: 'Foreign', cat_name: 'Cars' },
        { subcat_name: 'Domestic', cat_name: 'Cars' },
        { subcat_name: 'Football', cat_name: 'Sports' },
        { subcat_name: 'Soccer', cat_name: 'Sports' },
        { subcat_name: 'Game of Thrones', cat_name: 'American TV' },
        { subcat_name: 'Walking Dead', cat_name: 'American TV' },
        { subcat_name: 'Doctor Who', cat_name: 'British TV' },
        { subcat_name: 'The Bodyguard', cat_name: 'British TV' },
        { subcat_name: 'Mountains', cat_name: 'Nature' },
        { subcat_name: 'Lakes', cat_name: 'Nature' },
        { subcat_name: 'TVs', cat_name: 'Technology' },
        { subcat_name: 'Computers', cat_name: 'Technology' },
        { subcat_name: 'JavaScript', cat_name: 'Web Development' },
        { subcat_name: 'NodeJS', cat_name: 'Web Development' },
        { subcat_name: 'Doggos', cat_name: 'Animals' },
        { subcat_name: 'Cats', cat_name: 'Animals' },
        { subcat_name: 'Adobe CC', cat_name: 'UI/UX Design' },
        { subcat_name: 'Templates', cat_name: 'UI/UX Design' },
        { subcat_name: 'Programming', cat_name: 'Computer Science' },
        { subcat_name: 'Computer Engineering', cat_name: 'Computer Science' }
      ]);
    });
};
