
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('subcategory', s => {

        s.increments();

        s.string('subcat_name', 20)
          .notNullable()
          .unique();
          
        s.integer('cat_id')
          .unsigned()
          .notNullable()
          .references('id') //creating reference to category name
          .inTable('category');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('subcategory')
};
