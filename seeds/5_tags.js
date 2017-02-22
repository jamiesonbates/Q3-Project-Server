'use strict';

exports.seed = function(knex) {
  return knex('tags').del()
    .then(() => {
      return knex('tags').insert([
        {
          id: 1,
          name: 'noise'
        },
        {
          id: 2,
          name: 'danger'
        },
        {
          id: 3,
          name: 'cycling'
        },
        {
          id: 4,
          name: 'garbage'
        }
      ]);
    });
};
