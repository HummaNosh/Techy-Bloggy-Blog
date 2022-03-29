const router = require('express').Router();

const apiRoutes = require('./api');
const loggedRoutex = require('./api/logged');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
