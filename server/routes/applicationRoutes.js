const router = require('express').Router();
const applications = require('../db/queries/applications');

router.get("/user/:id", (req, res) => {
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

router.get("/:id", (req, res) => {
  applications
    .getApplicationById(req.params.id)
    .then((application) => {
      res.json({ application });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting user by id: ${e.message}`,
      });
    });
});

router.post('/delete/:id', (req, res) =>{
  applications
  .deleteApplicationById(req.params.id)
  .then((application) => {
    res.json({ application });
  })
  .catch((e) => {
    res.status(500).json({
      error: `error deleting application: ${e.message}`,
    });
  });
})


module.exports = router;