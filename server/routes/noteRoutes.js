const router = require('express').Router();
const notes = require('../db/queries/notes');

router.get("/application/:id", (req, res) => {
  notes
    .getNotesByApplicationId(req.params.id)
    .then((notes) => {
      res.json({ notes });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting user by id: ${e.message}`,
      });
    });
});

module.exports = router;