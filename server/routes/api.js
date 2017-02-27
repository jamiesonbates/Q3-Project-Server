'use strict';

const boom = require('boom');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');
const knex = require('../../knex');
const router = require('express').Router();


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

  bcrypt.hash(password, 12)
    .then((h_pw) => {
      return knex('users').insert({ username: username, email: email, h_pw: h_pw, address: address }, '*');
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
      const claim = { userId: user.id };
      const token = jwt.sign(claim, process.env.JWT_KEY, {
        expiresIn: '30 days'
      });

      res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
        secure: router.get('env') === 'production'
      });

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
