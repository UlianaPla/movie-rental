const { models } = require('../sequelize');

async function getAll(req, res) {
  const films = await models.film.findAll({
    offset: req.query.offset,
    limit: req.query.limit
  }
  );

  res.status(200).json(films);
};

async function getById(req, res) {
  console.log('films get by id');
  const film = await models.film
    .findOne({ raw: true, where: { code: req.params.id } })
    .catch((error) => { res.status(400).send(error); });;

  if (film)
    res.status(200).json(film);
  else
    res.status(404).send(`There is no film with id ${req.params.id}`);
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

