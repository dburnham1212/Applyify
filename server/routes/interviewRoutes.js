const router = require('express').Router();
const interviews = require('../db/queries/interviews');

router.get("/application/:id", (req, res) => {
  interviews
    .getInterviewByApplicationId(req.params.id)
    .then((interviews) => {
      res.json({ interviews });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting interview by application id: ${e.message}`,
      });
    });

    
});

module.exports = router;