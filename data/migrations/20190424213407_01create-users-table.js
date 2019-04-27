
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
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('users')
};
