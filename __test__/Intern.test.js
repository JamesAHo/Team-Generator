const Intern = require('../lib/Intern')



describe('Intern', () => {
    it("RetrieveSchool returns school", () => {
        expect(new Intern("UCLA").RetrieveName()).toBe("UCLA");
    });
    it("getRole return role", () => {
        expect(new Intern('Employee').getRole()).toBe('Intern');
    });
})