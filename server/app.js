const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.disable('x-powered-by');

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

module.exports = app;
