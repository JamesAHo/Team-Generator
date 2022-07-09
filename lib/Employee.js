// Using constructor method
class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    RetrieveName() {
        return this.name;
    }
    RetrieveId() {
        return this.id;
    }
    RetrieveEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
    
}
module.exports = Employee;