'use strict';

exports.seed = function(knex) {
  return knex('problems').del()
    .then(() => {
      return knex('problems').insert([
        {
          id: 1,
          user_id: 1,
          description: 'This dog kennel is VERY noisy!',
          lat: 47.618593,
          lng: -122.325933,
          category_id: 5
        },
        {
          id: 2,
          user_id: 1,
          description: 'There is always garbage everywhere and broken glass in this alley',
          lat: 47.618889,
          lng: -122.325828,
          category_id: 4
        },
        {
          id: 3,
          user_id: 1,
          description: 'It is dangerous for cyclists here because of the train tracks in the road.',
          lat: 47.599207,
          lng: -122.332724,
          category_id: 3
        }
      ])
      .then(() => {
          return knex.raw("SELECT setval('problems_id_seq', (SELECT MAX(id) FROM problems));");
        });
    });
};
