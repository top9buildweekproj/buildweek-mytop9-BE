
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('category', c => {

        c.increments();

        c.string('category_name', 20)
        .unique()
        .notNullable();

        c.string('imageUrl')
            .notNullable();
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('category')
};
