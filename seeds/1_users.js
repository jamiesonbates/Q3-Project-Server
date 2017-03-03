'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        {
          id: 1,
          username: 'jamiesonbates',
          email: 'jamiesonbates@gmail.com',
          h_pw: '$2a$12$enuFwD6k2m8uD9yN2OVcI.ExS1dWGdlTZ/YX2zmWTjS7X24Lo.Wye',
          address: '106 Bellevue Ave E, Apt 203, Seattle, WA, 98102'
        },
        {
          id: 2,
          username: 'minhchau',
          email: 'xiu.chau@gmail.com',
          h_pw: '$2a$12$enuFwD6k2m8uD9yN2OVcI.ExS1dWGdlTZ/YX2zmWTjS7X24Lo.Wye',
          address: '123 Fake St, Seattle, WA, 98104'
        },
        {
          id: 3,
          username: 'g40student',
          email: 'pro@amazon.com',
          h_pw: '$2a$12$enuFwD6k2m8uD9yN2OVcI.ExS1dWGdlTZ/YX2zmWTjS7X24Lo.Wye',
          address: '111 S Jackson St, Seattle, WA, 98104'
        },
        {
          id: 4,
          username: 'codergirl',
          email: 'coder@girl.com',
          h_pw: '$2a$12$enuFwD6k2m8uD9yN2OVcI.ExS1dWGdlTZ/YX2zmWTjS7X24Lo.Wye',
          address: '111 S Jackson St, Seattle, WA, 98104'
        },
        {
          id: 5,
          username: 'homeless_man',
          email: 'home@less.com',
          h_pw: '$2a$12$enuFwD6k2m8uD9yN2OVcI.ExS1dWGdlTZ/YX2zmWTjS7X24Lo.Wye',
          address: 'Everywhere'
        }
      ])
      .then(() => {
          return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));");
        });
    });
};
