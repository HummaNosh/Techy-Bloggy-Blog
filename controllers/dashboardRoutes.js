const router = require('express').Router();
const { New, User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const NewData = await New.findAll({
      include: {
        model: User,
        attributes: ['username'],
      },
      where: {
        user_id: req.session.user_id,
      },
    });

    const NewStuff= NewData.map((New) => New.get({ plain: true }));

    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/createBlog', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    res.render('createBlog');
  } else {
  res.redirect('/login');
  }
});

// router.get('/updateBlog/:id', withAuth, async (req, res) => {  
//   try {
//     const NewData = await New.findOne({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     const article = NewData.get({ plain: true });

//     res.render('updateBlog', {
//       article,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;