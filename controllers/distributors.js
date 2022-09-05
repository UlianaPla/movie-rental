const { models } = require('../sequelize');

async function getAll(req, res, next) {
  // offset, limit, etc - should come from query params 
  const distributors = await models.distributor.findAll(); // add offset/limit logic here and fetch only required number of records

  res.status(200).json(distributors.slice(0, 10)); // bad idea, in case of huge table will be a bottleneck
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
  getAll,
  getById,
  create,
  update,
  remove,
};