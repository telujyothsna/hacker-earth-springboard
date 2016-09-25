'use strict';

var express = require('express');
var controller = require('./path.controller');

var router = express.Router();

router.get('/', controller.index);
router.put('/:id/upvote', controller.upvote);
router.put('/:id/downvote', controller.downvote);

module.exports = router;
