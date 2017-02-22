'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('pictures', (table) => {
    table
      .increments();
    table
      .integer('prob_id')
      .references('id')
      .inTable('problems')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table
      .string('img_url')
      .notNullable()
      .defaultTo('https://image.freepik.com/free-photo/polaroid-photos-pinned-to-a-cork-board_1101-295.jpg');
    table
      .string('description')
      .notNullable()
      .defaultTo('');
    table
      .timestamps(true, true);
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('pictures');
};
