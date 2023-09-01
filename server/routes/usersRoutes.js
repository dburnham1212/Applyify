const router = require('express').Router();
const users = require('../db/queries/users');

router.get("/:id", (req, res) => {
  users
    .getUserById(req.params.id)
    .then((user) => {
      res.json({ user });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting user by id: ${e.message}`,
      });
    });
});

module.exports = router;