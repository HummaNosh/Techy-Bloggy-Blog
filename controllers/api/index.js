const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const NewpostRoutes = require('./NewpostRoutes');
router.use('/users', userRoutes);
router.use('/NewpostRoutes', NewpostRoutes);
router.use('/projects', projectRoutes);

module.exports = router;