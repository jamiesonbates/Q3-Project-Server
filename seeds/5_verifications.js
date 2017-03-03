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
        },
        {
          id: 2,
          prob_id: 3,
          user_id: 1,
          verified: true,
          comments: 'I agree that it is very dangerous to cycle on this road.'
        },
        {
          id: 3,
          prob_id: 3,
          user_id: 3,
          verified: true,
          comments: 'I agree that it is very dangerous to cycle on this road.'
        },
        {
          id: 4,
          prob_id: 3,
          user_id: 4,
          verified: true,
          comments: 'I agree that it is very dangerous to cycle on this road.'
        },
        {
          id: 5,
          prob_id: 2,
          user_id: 1,
          verified: true,
          comments: 'I agree that it is very dangerous to cycle on this road.'
        },
        {
          id: 6,
          prob_id: 2,
          user_id: 2,
          verified: true,
          comments: 'I agree that it is very dangerous to cycle on this road.'
        },
        {
          id: 7,
          prob_id: 2,
          user_id: 5,
          verified: true,
          comments: 'I agree that it is very dangerous to cycle on this road.'
        },
        {
          id: 8,
          prob_id: 2,
          user_id: 4,
          verified: true,
          comments: 'I agree that it is very dangerous to cycle on this road.'
        },
        {
          id: 9,
          prob_id: 2,
          user_id: 3,
          verified: true,
          comments: 'I agree that it is very dangerous to cycle on this road.'
        },
        {
          id: 10,
          prob_id: 5,
          user_id: 1,
          verified: true,
          comments: 'I agree that it is very dangerous to cycle on this road.'
        },
        {
          id: 11,
          prob_id: 5,
          user_id: 2,
          verified: true,
          comments: 'I agree that it is very dangerous to cycle on this road.'
        },
        {
          id: 12,
          prob_id: 5,
          user_id: 3,
          verified: true,
          comments: 'I agree that it is very dangerous to cycle on this road.'
        },
        {
          id: 13,
          prob_id: 1,
          user_id: 3,
          verified: true,
          comments: 'I agree that it is very dangerous to cycle on this road.'
        },
        {
          id: 14,
          prob_id: 1,
          user_id: 2,
          verified: true,
          comments: 'I agree that it is very dangerous to cycle on this road.'
        },
        {
          id: 15,
          prob_id: 1,
          user_id: 5,
          verified: true,
          comments: 'I agree that it is very dangerous to cycle on this road.'
        },
        {
          id: 16,
          prob_id: 1,
          user_id: 4,
          verified: true,
          comments: 'I agree that it is very dangerous to cycle on this road.'
        }
      ])
      .then(() => {
          return knex.raw("SELECT setval('verifications_id_seq', (SELECT MAX(id) FROM verifications));");
        });
    });
};
