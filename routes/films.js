const express = require('express');
const router = express.Router();

const { getAll, getById, create, update, remove } = require('../controllers/films');


router.get('/', getAll);
router.post('/', create);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);


// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/:id', function(req, res, next){
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

module.exports = router;
