
exports.up = function(knex, Promise) {
  return knex.schema

  .createTable('users', u => {
      u.increments();

      u.string('username', 12)
        .unique() 
        .notNullable();
      u.string('password', 12)
        .notNullable();
  })

  .createTable('category', c => {
    c.increments();
    c.string('category_name', 20)
    .notNullable()
    .unique();
  })

  .createTable('subcategory', s => {
    s.increments();
    s.string('subcat_name', 20)
      .notNullable()
      .unique();
    s.string('cat_name', 20)
      .notNullable()
      .references('category_name') //creating reference to category name
      .inTable('category');
  })

  .createTable('top_list', t => {
    t.increments();
    t.integer('user_id')
      .notNullable()
      .references('id') //creating reference to user's id
      .inTable('users')
    t.string('cat_name', 20)
      .notNullable()
      .references('category_name')
      .inTable('category')
    t.string('sub_name', 20)
      .notNullable()
      .references('subcat_name')
      .inTable('subcategory');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
