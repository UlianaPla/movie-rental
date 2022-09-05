const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');

const sequelize = new Sequelize('postgres://ulia_4d91:pa55w0rd@localhost:5432/movie_rental'); // move connection details into env variables

const modelDefiners = [
	require('../models/distributor'),
	require('../models/film'),
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

module.exports = sequelize;