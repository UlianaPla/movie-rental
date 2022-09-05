const { models } = require('../sequelize');

async function getTen(req, res) {
  const films = await models.film.findAll({ raw: true });
  res.status(200).json(films.slice(0, 10));
};

async function getById(req, res) {
  const id = getIdFromParams(req.params);
  const filmById = await models.film.findOne({ raw: true, where: { did: `${id}` } });
  
  if (filmById == null)
    res.status(200).send(`There is no film with id ${id}`);
  else
    res.status(200).json(filmById);
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

function getIdFromParams(params) {
  if (params == 'undefined' || params.id == 'undefined')
    return -1;

  const paramStr = String(params.id);
  const id = paramStr.replace(/\D/g, '');
  return id;
}

module.exports = {
  getTen,
  getById,
  create,
  update,
  remove,
};

