const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const NewpostRoutes = require('./NewpostRoutes');
const postRoute = require("./postRoutes");

router.use("/posts", postRoute);
router.use('/users', userRoutes);
router.use('/New', NewpostRoutes);
router.use('/projects', projectRoutes);

module.exports = router;