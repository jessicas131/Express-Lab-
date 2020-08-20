var express = require('express');
const skillsCtrl = require('../controllers/skills');
const skill = require('../models/skill');
const skills = require('../controllers/skills');
var router = express.Router();



/* GET users listing. */


router.get('/', skillsCtrl.index);
// GET skills/new
router.get('/new', skillsCtrl.new);

router.get('/:id', skillsCtrl.show);

router.post('/', skillsCtrl.create);

// DELETE /todos/:id
router.delete('/:id', skillsCtrl.delete);


//created a new page by accessing the controller 



module.exports = router;
