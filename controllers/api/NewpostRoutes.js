const router = require('express').Router();
const { New } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const NewPost = await New.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(NewPost);

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const NewpostInfo = await New.update(
    {
      title: req.body.NewTitle,
      content: req.body.NewContent,
    },
    {
      where: {
        id: req.params.id,
      },
    });

    if (!NewpostInfo) {
      res.status(404).json({ message: 'No post found with this id.' });
      return;
    }

    res.status(200).json(NewpostInfo);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const NewpostInfo = await New.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!NewpostInfo) {
      res.status(404).json({ message: 'Nothing found with this id!' });
      return;
    }

    res.status(200).json(NewpostInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router; 