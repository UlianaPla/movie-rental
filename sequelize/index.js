const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');

const sequelize = new Sequelize('postgres://ulia_4d91:pa55w0rd@localhost:5432/movie_rental');

const modelDefiners = [
	require('../models/distributor'),
	require('../models/film'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;