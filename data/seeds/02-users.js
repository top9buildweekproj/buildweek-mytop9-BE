
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'tbelk12', password: 'testingpass1' },
        { username: 'jholloway', password: 'testingpass2' },
        { username: 'nwaddell',password: 'testingpass3' },
        { username: 'afuller',password: 'testingpass4' }
      ]);
    });
};