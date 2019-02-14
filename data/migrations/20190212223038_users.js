
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
      table.increments();
      table.string('username', 100).notNullable().unique();
      table.string('password').notNullable();
      table.string('email').notNullable();
      table.string('role').notNullable();
      table.string('country');
      table.string('organization_title', 100);
      table.string('created_at').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
