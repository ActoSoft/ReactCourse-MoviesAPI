const express = require('express');
const MovieRouter = require('./movieRouter');

const router = express.Router();

router.use('/movies', MovieRouter);

module.exports = router;
