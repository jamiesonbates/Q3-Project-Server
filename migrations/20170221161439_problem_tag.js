'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('problem_tag', (table) => {
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
      .integer('tag_id')
      .references('id')
      .inTable('tags')
      .notNullable()
      .onDelete('CASCADE')
      .index();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tags');
};
