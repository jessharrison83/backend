exports.up = function(knex, Promise) {
  return knex.schema.createTable("stories", table => {
    table.increments();
    table.string("title", 250).notNullable();
    table.string("country").notNullable();
    table.string("description", 100000).notNullable();
    table
      .string("updated_at")
      .notNullable()
      .defaultTo(knex.fn.now());
    table.string("small_image").notNullable();
    table.string("large_image").notNullable();
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("stories");
};
