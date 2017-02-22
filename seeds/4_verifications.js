'use strict';

exports.seed = function(knex) {
  return knex('verifications').del()
    .then(() => {
      return knex('verifications').insert([
        {
          id: 1,
          prob_id: 3,
          user_id: 2,
          verified: true,
          comments: 'I agree that it is very dangerous to cycle on this road.'
        }
      ]);
    });
};
