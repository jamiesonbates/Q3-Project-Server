'use strict';

exports.seed = function(knex) {
  return knex('pictures').del()
    .then(() => {
      return knex('pictures').insert([
        {
          id: 1,
          prob_id: 1,
          img_url: 'https://adriftontheshore.files.wordpress.com/2013/07/downtown-dog-lounge.jpg?w=1400',
          description: 'This is the front of the building.'
        },
        {
          id: 2,
          prob_id: 2,
          img_url: 'http://s3-us-west-2.amazonaws.com/ktoo/2013/09/Alley-Trash.jpg',
          description: 'Current situation!!'
        },
        {
          id: 3,
          prob_id: 3,
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Pioneer_Square_Streetcar_Station_(14441361345).jpg/220px-Pioneer_Square_Streetcar_Station_(14441361345).jpg',
          description: 'Tracks at the station. Looks just like how they are on the street. Be carful!'
        }
      ]);
    });
};
