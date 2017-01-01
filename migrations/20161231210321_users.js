
exports.up = (knex) => knex.schema.createTable('users', function (table) {
  table.increments().primary();
  table.string('username').unique();
  table.string('password').notNullable();
  table.string('email').unique().notNullable();
  table.timestamps();
})

exports.down = (knex) => knex.schema.droptable('users');