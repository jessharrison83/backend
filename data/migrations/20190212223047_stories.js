
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stories', table => {
      table.increments();
      table.string('title', 250).notNullable();
      table.string('country').notNullable();
      table.string('description').notNullable();
      table.string('updated_at').notNullable().defaultTo(knex.fn.now());
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').on('users');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stories')
};