
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('top_list', t => {

        t.increments();

        t.integer('user_id')
          .unsigned()
          .notNullable()
          .references('id') //creating reference to user's id
          .inTable('users');

        t.integer('cat_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('category');

        t.integer('sub_id', 20)
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('subcategory');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('top_list');
};
