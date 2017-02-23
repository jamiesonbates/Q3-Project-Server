'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table
      .increments();
    table
      .string('username')
      .notNullable();
    table
      .string('email')
      .notNullable()
      .unique();
    table
      .string('h_pw')
      .notNullable();
    table
      .string('img_url')
      .notNullable()
      .defaultTo('http://www.aspirehire.co.uk/aspirehire-co-uk/_img/profile.svg');
    table
      .string('address')
      .notNullable()
      .defaultTo('');
    table
      .timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
