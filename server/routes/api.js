'use strict';

const bcrypt = require('bcrypt-as-promised');
const router = require('express').Router();
const knex = require('../../knex');

router.get('/', (req, res) => {
  res.send('Hi from API!');
})

/*
  ------------------------------------------------------------------------------
  Users
  ------------------------------------------------------------------------------
*/

// Register 1 User
router.post('/users', (req, res, next) => {
  const { username, email, password, img_url, address } = req.body;
  console.log(username, email, password, img_url, address);

  bcrypt.hash(password, 12)
    .then((h_pw) => {
      console.log(username, email, h_pw, img_url, address);
      return knex('users').insert({ username: username, email: email, h_pw: h_pw, img_url: img_url, address: address }, '*');
    })
    .then((users) => {
      const user = users[0];
      console.log(user);

      delete user.h_pw;

      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router
