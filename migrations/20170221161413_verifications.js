'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('verifications', (table) => {
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
      .integer('user_id')      
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table
      .boolean('verified');
    table
      .text('comments')
      .notNullable()
      .defaultTo('');
    table
      .timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('verifications');
};
