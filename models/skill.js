const students = [
    { student: 'Jessica', skill: 'javascript', id: 70933 },
    { student: 'Colin', skill: 'HTML', id: 23455 },
    { student: 'Junyi', skill: 'MVC', id: 45622 },
    { student: 'Rashel', skill: 'CSS', id: 22384 }
];

module.exports = {
    students,
    getSkill
}

function getSkill(language) {
    return students.find(function (obj) {
        return obj.skill === language;
    }).student
}