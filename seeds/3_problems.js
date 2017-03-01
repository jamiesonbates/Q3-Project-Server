'use strict';

exports.seed = function(knex) {
  return knex('problems').del()
    .then(() => {
      return knex('problems').insert([
        {
          id: 1,
          user_id: 1,
          title: 'Noisy Dog Kennel'
          description: 'This dog kennel is VERY noisy!',
          lat: 47.599179,
          lng: -122.333789,
          category_id: 5
        },
        {
          id: 2,
          user_id: 1,
          title: 'Broken Glass in Alley'
          description: 'There is always garbage everywhere and broken glass in this alley',
          lat: 47.598739,
          lng: -122.334136,
          category_id: 4
        },
        {
          id: 3,
          user_id: 1,
          title: 'Cyclist: watch for train tracks'
          description: 'It is dangerous for cyclists here because of the train tracks in the road.',
          lat: 47.600873,
          lng: -122.334115,
          category_id: 3
        }
      ])
      .then(() => {
          return knex.raw("SELECT setval('problems_id_seq', (SELECT MAX(id) FROM problems));");
        });
    });
};
