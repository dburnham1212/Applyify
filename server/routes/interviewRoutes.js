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

router.post("/application/:id", (req, res) => {
  interviews
    .createInterview(req.params.id, req.body)
    .then((interview) => {
      res.json({ interview });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting interview by application id: ${e.message}`,
      });
    });
});

router.post("/delete/:id", (req, res) => {
  interviews
    .deleteInterview(req.params.id)
    .then((interview) => {
      res.json({ interview });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting interview by application id: ${e.message}`,
      });
    });

    
});

router.post("/update/:id", (req, res) => {
  interviews
    .updateInterview(req.params.id, req.body)
    .then((interview) => {
      res.json({ interview });
    })
    .catch((e) => {
      res.status(500).json({
        error: `error getting interview by application id: ${e.message}`,
      });
    });
});


module.exports = router;