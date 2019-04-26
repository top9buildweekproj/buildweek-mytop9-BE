
exports.up = function(knex) {
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
    .unique()
    .notNullable();
  })

  .createTable('subcategory', s => {
    s.increments();
    s.string('subcat_name', 20)
      .notNullable()
      .unique();
    s.int('cat_id')
      .unsigned()
      .notNullable()
      .references('id') //creating reference to category name
      .inTable('category');
  })

  .createTable('top_list', t => {
    t.increments();
    t.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id') //creating reference to user's id
      .inTable('users')
    t.int('cat_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('category')
    t.int('sub_id', 20)
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('subcategory');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema
      .dropTableIfExists('users')
      .dropTableIfExists('category')
      .dropTableIfExists('subcategory')
      .dropTableIfExists('top_list');
};
