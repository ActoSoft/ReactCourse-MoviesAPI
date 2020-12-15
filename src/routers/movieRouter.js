const express = require('express');
const { MovieController } = require('../controllers');

const router = express.Router();

router.get('/', MovieController.getAll);
router.post('/', MovieController.createMovie);

module.exports = router;
