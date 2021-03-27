const router = require('express').Router();
const questionRoutes = require('./questions');
const playerRoutes = require('./players');

router.use('/questions', questionRoutes);
router.use('/players', playerRoutes);

module.exports = router;