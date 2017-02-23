'use strict';

const bcrypt = require('bcrypt-as-promised');
const router = require('express').Router();
const knex = require('knex');

router.get('/', (req, res) => {
  res.send('Hi from API!')
})

// Users

// Register 1 User
router.post('/users', (req, res, next) => {
  const { username, email, img_url, address } = req.body;

  bcrypt.hash(req.body.password, 12)
    .then((h_pw) => {
      return knex('users').insert({ username, email, h_pw, img_url, address });
    })
    .then((users) => {
      const user = users[0];

      delete user.h_pw;

      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router
