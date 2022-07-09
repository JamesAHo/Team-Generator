// require Employee folder

const Employee = require("../lib/Employee")
// describe(name, fn) creates a block that groups together several related tests. For example, if you have a myBeverage object that is supposed to be delicious but not sour, you could test it with:
// .describe examples 

// const myBeverage = {
//   delicious: true,
//   sour: false,
// };

// describe('my beverage', () => {
//   test('is delicious', () => {
//     expect(myBeverage.delicious).toBeTruthy();
//   });

//   test('is not sour', () => {
//     expect(myBeverage.sour).toBeFalsy();
//   });
// });

// test for Employee
describe('Employee', () => {
    // check to see if passes
    it("RetrieveName returns name", () => {
        expect(new Employee("James").RetrieveName()).toBe("James");
    });
    // to pass id
    it("RetrieveId returns id", () => {
        expect(new Employee("James","222").RetrieveId()).toBe("222");
    });
    it("RetrieveEmail returns email", () => {
        expect(new Employee("James","222", "thai.ho184@gmail.com").RetrieveEmail()).toBe("thai.ho184@gmail.com");
    });
    it("getRole returns role", () => {
        expect(new Employee("Employee").getRole()).toBe("Employee");
    });
})