const express = require('express');
const { MovieController, CharacterController } = require('../controllers');

const router = express.Router();

router.get('/', MovieController.getAll);
router.get('/:movieId', MovieController.getOne);
router.post('/', MovieController.createMovie);
router.post('/:movieId/characters', CharacterController.createMovie);
router.put('/:movieId', MovieController.updateMovie);
router.put('/:movieId/characters/:characterId', CharacterController.updateMovie);
router.delete('/:movieId', MovieController.deleteMovie);

module.exports = router;
