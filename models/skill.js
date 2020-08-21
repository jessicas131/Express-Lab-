const skills = [
    { id: 123456, skill: 'JS', learned: true },
    { id: 654321, skill: 'HTML', learned: true },
    { id: 567890, skill: 'MVC', learned: false },
    { id: 098765, skill: 'CSS', learned: true }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
};

function deleteOne(skillId) {
    const idx = skills.findIndex(skill => skill.id === parseInt(skillId));
    skills.splice(idx, 1);
}

// function getSkill(skillset) {
//     return skills.find(function (obj) {
//         return obj.skill === skillset;
//     }).skill
// }