const Manager = require('../lib/Manager')

describe('Intern', () => {
    it("RetrieveOfficeNumber returns officeNumber", () => {
        expect(new Manager("222").RetrieveName()).toBe("222");
    });
    it("getRole return role", () => {
        expect(new Manager('Employee').getRole()).toBe('Manager');
    });
})