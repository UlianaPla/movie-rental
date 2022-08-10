const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const router = express.Router();


router.get('/', function(req, res, next) {
  getFilms().then((data) => {
    res.send(data);
  });
});

async function getFilms() {
  const sequelize = new Sequelize('postgres://ulia_4d91:pa55w0rd@localhost:5432/movie_rental')

  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');

      const Film = sequelize.define('film',{
          code: { type: DataTypes.CHAR, primaryKey: true },
          title: { type: DataTypes.TEXT },
          did: { type: DataTypes.INTEGER },
          date_prod: { type: DataTypes.DATE },
          kind: { type: DataTypes.TEXT },
          len: { type: DataTypes.TIME }
      }, 
      { createdAt: false, updatedAt: false });

      const films = await Film.findAll({ raw: true});
      const res = films.slice(0, 10);
      
      console.log(res);
      return res;
  } catch (error) {
      console.error('Unable to connect to the database:', error);
  } finally {
      await sequelize.close();
  }
}

module.exports = router;

