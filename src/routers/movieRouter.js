const express = require('express');
const { MovieController } = require('../controllers');

const router = express.Router();

router.get('/', MovieController.getAll);
router.get('/:movieId', MovieController.getOne);
router.post('/', MovieController.createMovie);
router.put('/:movieId', MovieController.updateMovie);
router.delete('/:movieId', MovieController.deleteMovie);

module.exports = router;
