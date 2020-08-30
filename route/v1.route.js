const router = require('express').Router();

const v1Controller = require('../controller/v1.controller');

router.get('/get-api', v1Controller.getAPI);
router.post('/post-api', v1Controller.postAPI);

module.exports = router;