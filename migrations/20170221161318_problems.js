'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('problems', (table) => {
    table
      .increments();
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table
      .string('name')
      .notNullable()
      .defaultTo('')
    table
      .text('description')
      .notNullable()
      .defaultTo('');
    table
      .float('lat')
      .notNullable()
      .defaultTo(47.483842);
    table
      .float('lng')
      .notNullable()
      .defaultTo(-122.162876);
    table
      .integer('category_id')
      .references('id')
      .inTable('categories')
      .notNullable()
      .defaultTo(1)
      .index();
    table
      .timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('problems');
};
