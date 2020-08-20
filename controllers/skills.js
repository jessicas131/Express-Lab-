const Skill = require('../models/skill');
// codingSkills now = module.exports in models/skill

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function newSkill(req, res) {
    res.render('skills/new')
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: req.params.id
    })
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills')
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}



//rendered the ejs file 
// how we were able to make it like url-able 