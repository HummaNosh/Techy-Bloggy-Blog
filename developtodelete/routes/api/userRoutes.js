const router = require('express').Router();
// const { NewUser } = require('../../models'); chwck this out

// Signing Up
router.post('/', async (req, res) => {
  try {
    const loggedData = await NewUser.create({
      display_name: req.body.display_name,
      email: req.body.email,
      password: req.body.password,
    });

// Session/cookie stuff
    req.session.save(() => {
      req.session.LoggedOn = true;

      res.status(200).json(loggedData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// When user logs in..

router.post('/login', async (req, res) => {
  try {
    const loggedData = await NewUser.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!loggedData) {
      res
        .status(400)
        .json({ message: 'Account not found! Please use the correct email or password and try again!' });
      return;
    }

    const checkPwrd = await loggedData.checkPassword(req.body.password);

    if (!checkPwrd) {
      res
        .status(400)
        .json({ message: 'Account not found! Please use the correct email or password and try again!'});
      return;
    }

    req.session.save(() => {
      req.session.LoggedOn = true;

      res
        .status(200)
        .json({ user: loggedData, message: 'Wahoo! You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// When user logs out
router.post('/logout', (req, res) => {
  if (req.session.LoggedOn) {
    //   bin the 'session'/memory of login
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
