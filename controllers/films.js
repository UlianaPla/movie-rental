const { models } = require('../sequelize');

async function getAll(req, res) {
  const films = await models.film.findAll({
    offset: `${req.query.offset}`,
    limit: `${req.query.limit}`
  }
  );

  res.status(200).json(films);
};

async function getById(req, res) {
  const id = getIdFromParams(req.params);
  const film = await models.film.findOne({ raw: true, where: { did: `${id}` } }); // 2 things here: did is not a PK, and is not a string. Also why `${}`?

  if (film)
    res.status(200).json(film);
  else
    res.status(404).send(`There is no film with id ${id}`);
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
  // you won't get into this function if params is undefined anyway
  if (params == 'undefined' || params.id == 'undefined') // very strange check for undefined
    return -1;

  const paramStr = String(params.id); // why?
  const id = paramStr.replace(/\D/g, ''); // why?
  return id;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

