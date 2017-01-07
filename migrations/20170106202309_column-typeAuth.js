
exports.up = (knex) => knex.schema.alterTable('users', function (table) {
  table.string('typeAuth').unique().notNullable();

})

exports.down = (knex) => knex.schema.droptable('users');
