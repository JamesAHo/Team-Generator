
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it("RetrieveGithub returns Github", () => {
        expect(new Engineer("JamesAHo").RetrieveName()).toBe("JamesAHo");
    });

    it("getRole returns role", () => {
        expect(new Engineer("Employee").getRole()).toBe('Engineer');
    });
})