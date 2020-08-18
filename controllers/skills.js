const GaStudent = require('../models/skill')
// GaStudent now = module.exports in models/skill

function index(req, res) {
    res.render('skills/index', {
        cohort: GaStudent.students
    });
}

function show(req, res) {
    res.render('skills/show', {
        expertise: GaStudent.getSkill(req.params.language),
        expert: req.params.language
    })
}

module.exports = {
    index,
    show
}

//rendered the ejs file 
// how we were able to make it like url-able 