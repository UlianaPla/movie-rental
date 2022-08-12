const { models } = require('../sequelize');

async function getTen(req, res) {
	const films = await models.film.findAll({ raw: true});
	res.status(200).json(films.slice(0, 10));
};

async function getById(req, res) {
  res.send('getById');
}

async function create(req, res) {
  res.send('create');
}

async function update(req, res) {
  res.send('update');
}

async function remove(req, res) {
  res.send('remove');
}

module.exports = {
  getTen,
  getById,
  create,
  update,
  remove,
};

