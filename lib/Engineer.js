const Employee = require('../lib/Employee')


class Engineer extends Employee {
    constructor(name, id, email,github) {
        super(name, id, email)
        this.github = github;
    }
    RetrieveGithub() {
        return this.RetrieveGithub;
    }
    getRole() {
        return 'Engineer'
    }
};
module.exports = Engineer;