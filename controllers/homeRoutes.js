const router = require('express').Router();
const  User = require('../models');

const withAuth = require('../utils/auth');


// router.get('/', async (req, res) => {
//   try {
 
//     const postData = await New.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const posts = postData.map((post) => post.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('dashboard', { 
//       posts, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/', async (req, res) => {
  try {
  
    // Pass serialized data and session flag into template
    res.render('dashboard',  {  
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }

});

// homepage
    // router.get('/dashboard', (req, res) => {

    //   res.render('all');
    // });

router.get('/all', (req, res) => {
  res.render('all');{
    
  }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });


  router.get('/createBlog', (req, res) => {
    res.render('createBlog');
  });


  // router.get('/profile', (req, res) => {
  //   if (!req.session.logged_in) {
  //     res.redirect('/login');
  //     return;
  //   }
  //   res.render('profile');
  // });
  
  router.get('/dashboard', (req, res) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
      return;
    res.render('dashboard');
  }});

  router.get('/viewBlog', (req, res) => {
 
    res.render('viewBlog');
  });

  // Use withAuth middleware to prevent access to route
  router.get('/createBlog', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: New }],
      });
  
      const user = userData.get({ plain: true });
      // const posts = postData.map((post) => post.get({ plain: true }));

      res.render('all', {
        ...user,
        // posts,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });




  module.exports = router;