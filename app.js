const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const distributorsRouter = require('./routes/distributors');
const filmsRouter = require('./routes/films');

const app = express();

app.use(errorHandler);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/distributors', distributorsRouter);
app.use('/films', filmsRouter);

function errorHandler(err, req, res, next) {
  res.status(500).render('error', { error: err });
}

module.exports = app;
