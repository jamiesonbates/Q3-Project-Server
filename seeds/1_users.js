'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        {
          id: 1,
          username: 'jamiesonbates',
          email: 'jamiesonbates@gmail.com',
          h_pw: 'password',
          address: '106 Bellevue Ave E, Apt 203, Seattle, WA, 98102'
        },
        {
          id: 2,
          username: 'minhchau',
          email: 'xiu.chau@gmail.com',
          h_pw: 'password',
          address: '100 Jackson Street, Seattle, WA, 98102'
        }
      ]);
    });
};
