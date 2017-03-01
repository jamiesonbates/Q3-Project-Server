'use strict';

exports.seed = function(knex) {
  return knex('categories').del()
    .then(() => {
      return knex('categories').insert([
        {
          id: 1,
          category: 'other'
        },
        {
          id: 2,
          category: 'construction'
        },
        {
          id: 3,
          category: 'biking'
        },
        {
          id: 4,
          category: 'garbage'
        },
        {
          id: 5,
          category: 'noise'
        },
        {
          id: 6,
          category: 'danger'
        },
        {
          id: 7,
          category: 'broken'
        },
        {
          id: 8,
          category: 'theft'
        },
        {
          id: 9,
          category: 'traffic'
        },
      ])
      .then(() => {
          return knex.raw("SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories));");
        });
    });
};
