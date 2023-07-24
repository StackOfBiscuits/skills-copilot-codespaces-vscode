function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS', 'React', 'Node'];
    var member = {
        name: 'Sang',
        age: 20,
        skills: skills,
        addSkill: function (skill) {
            this.skills.push(skill);
        }
    };
    member.addSkill('PHP');
    console.log(member);
}