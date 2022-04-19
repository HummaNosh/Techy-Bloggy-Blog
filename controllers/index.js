const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const NewpostRoutes = require('./api/NewpostRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/NewRoutes', NewpostRoutes);

module.exports = router;