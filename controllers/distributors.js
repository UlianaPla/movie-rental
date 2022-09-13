const { models } = require('../sequelize');

async function getAll(req, res, next) {
  const distributors = await models.distributor.findAll({
    offset: req.query.offset,
    limit: req.query.limit
  }
  );

  res.status(200).json(distributors);
};

async function getById(req, res) {
  const id = req.params.id;
  const parsed = parseInt(id);

  /*if (isNaN(parsed)) {
    res.status(400).send(`Invalid input ${id}`);
    return;
  }*/

  const distributor = await models.distributor
    .findOne({ raw: true, where: { did: parsed } })
    .catch((error) => { res.status(400).send(error); });

  if (distributor)
    res.status(200).json(distributor);
  else
    res.status(404).send(`There is no film with id ${parsed}`);
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