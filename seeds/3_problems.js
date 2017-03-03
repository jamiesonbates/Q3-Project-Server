'use strict';

exports.seed = function(knex) {
  return knex('problems').del()
    .then(() => {
      return knex('problems').insert([
        {
          id: 1,
          user_id: 1,
          title: 'Noisy Dog Kennel',
          description: 'This dog kennel is VERY noisy!',
          lat: 47.599179,
          lng: -122.333789,
          category_id: 5
        },
        {
          id: 2,
          user_id: 1,
          title: 'Broken Glass in Alley',
          description: 'There is always garbage everywhere and broken glass in this alley',
          lat: 47.598739,
          lng: -122.334136,
          category_id: 4
        },
        {
          id: 3,
          user_id: 1,
          title: 'Cyclist: watch for train tracks',
          description: 'It is dangerous for cyclists here because of the train tracks in the road.',
          lat: 47.600873,
          lng: -122.334115,
          category_id: 3
        },
        {
          id: 4,
          user_id: 2,
          title: 'Mugging',
          description: 'My buddy was mugged here last week. Watch out and stay safe everyone!',
          lat: 47.598802,
          lng: -122.332903,
          category_id: 6
        },
        {
          id: 5,
          user_id: 3,
          title: 'Bike Theft',
          description: 'Someone smash the bike lock off my brand new Peugeot Du Monde. I\'ll miss you buddy. :(',
          lat: 47.598166,
          lng: -122.333203,
          category_id: 6
        },
        {
          id: 6,
          user_id: 4,
          title: 'Mile Backup on I5',
          description: 'Looks the Alaskan Viaduct is on the verge of collapse. Heavy traffic. Avoid at all costs if you can!',
          lat: 47.599311,
          lng: -122.335506,
          category_id: 9
        },
        {
          id: 7,
          user_id: 5,
          title: 'Ugly Baby Here',
          description: 'There is an ugly baby located at this location. Very, very ugly.',
          lat: 47.601506,
          lng: -122.332999,
          category_id: 1
        }
      ])
      .then(() => {
          return knex.raw("SELECT setval('problems_id_seq', (SELECT MAX(id) FROM problems));");
        });
    });
};
