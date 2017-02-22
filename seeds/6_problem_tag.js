'use strict';

exports.seed = function(knex) {
  return knex('problem_tag').del()
    .then(() => {
      return knex('problem_tag').insert([
        {
          id: 1,
          prob_id: 1,
          tag_id: 1
        },
        {
          id: 2,
          prob_id: 2,
          tag_id: 4
        },
        {
          id: 3,
          prob_id: 3,
          tag_id: 2
        },
        {
          id: 4,
          prob_id: 3,
          tag_id: 3
        }
      ]);
    });
};
