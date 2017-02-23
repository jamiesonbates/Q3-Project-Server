'use strict';

const boom = require('boom');
const bcrypt = require('bcrypt-as-promised');
const router = require('express').Router();
const knex = require('../../knex');

router.get('/', (req, res) => {
  res.send('Hi from API!');
})

/*
  ------------------------------------------------------------------------------
  User Registration and Authentication
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

router.post('/token', (req, res, next) => {
  let user;

  const { email, password } = req.body;
  console.log(email, password);

  knex('users')
    .where('email', email)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(400, 'Bad email or password');
      }

      user = row;
      console.log(user);

      return bcrypt.compare(password, user.h_pw);
    })
    .then(() => {
      delete user.h_pw;

      res.send(user);
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      throw boom.create(400, 'Bad email or password');
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router
