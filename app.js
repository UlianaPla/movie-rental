const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const distributorsRouter = require('./routes/distributors');
const filmsRouter = require('./routes/films');

const routes = {
	distributors: require('./routes/distributors'),
	films: require('./routes/films')
};

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.get('/films', filmsRouter.getTen);
app.post('/films', filmsRouter.create);
app.get('/films/:id', filmsRouter.getById);
app.put('/films/:id', filmsRouter.update);
app.delete('/films/:id', filmsRouter.remove);

app.get('/distributors', distributorsRouter.getTen);
app.post('/distributors', distributorsRouter.create);
app.get('/distributors/:id', distributorsRouter.getById);
app.put('/distributors/:id', distributorsRouter.update);
app.delete('/distributors/:id', distributorsRouter.remove);


// We create a wrapper to workaround async errors not being transmitted correctly.
function makeHandlerAwareOfAsyncErrors(handler) {
	return async function(req, res, next) {
		try {
			await handler(req, res);
		} catch (error) {
			next(error);
		}
	};
}


module.exports = app;
