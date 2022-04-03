const router = require('express').Router();

const loggedRoutes = require('./userRoutes');

router.use('/logged', loggedRoutes);

module.exports = router;
