const express = require('express');
const { MovieController, CharacterController } = require('../controllers');

const router = express.Router();

router.get('/', MovieController.getAll);
router.get('/:movieId', MovieController.getOne);
router.post('/', MovieController.createMovie);
router.put('/:movieId', MovieController.updateMovie);
router.delete('/:movieId', MovieController.deleteMovie);

// Character routes
router.post('/:movieId/characters', CharacterController.createCharacter);
router.put('/:movieId/characters/:characterId', CharacterController.updateCharacter);
router.delete('/:movieId/characters/:characterId', CharacterController.deleteCharacter);

module.exports = router;
