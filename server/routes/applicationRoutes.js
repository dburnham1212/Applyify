const router = require('express').Router();
const applications = require('../db/queries/applications');

router.get("/:id", (req, res) => {
  applications
    .getApplicationsByUserId(req.params.id)
    .then((applications) => {
      res.json({ applications });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting user by id: ${e.message}`,
      });
    });
});

module.exports = router;