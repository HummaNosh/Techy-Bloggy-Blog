const router = require('express').Router();

const loggedRoutes = require('./logged');

router.use('/logged', loggedRoutes);

module.exports = router;
