
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require('inquirer');
const generateHTML = require("./dist/GenerateHTML");


// creating const for validdating string/numbers/email
// Validating empty string
const confirmString = string => {
    return string != '' || 'Please provide required information.';
}
// validating email
const confirmEmail = email => {
    const emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;
    return emailReg.test(email) || 'Please provide valid email';
}
// Validating numbers
const confirmNumbers = number => {
    const numReg = /^\d+$/;
    return numReg.test(number) ||'Please provide number';
}


// Manager data section.
// Using init to prompt questions
let roster = [];
const init = () => {
    inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: "What is the manager's legal name?",
            validate: confirmString,
        },
        {
            type: 'input',
            message: "Enter manager's ID number",
            name: 'id',
            validate: confirmNumbers,

        },
        {
            type: 'input',
            name: 'email',
            message: "Enter manager's email address",
            validate: confirmEmail,
        },
        {
            type: 'input',
            name: 'office',
            message: " Enter manager's office number",
            validate: confirmNumbers,
        },
    ]).then((data) => {
        let manager = new Manager(data.name, data.id, data.email, data.office);
        roster.push(manager);
        //addteamRoster function
        addteamRoster();
    }); 
}
// Creating addteamRoster function
const addteamRoster = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What employee to add to the roster?',
            name: 'employee',
            choices: ['Engineer', 'Intern', "Cancel roster addition"],
        },
    ]).then((data) => {
        // if statement to run user's choice
        if (data.employee === 'Engineer') {
            PushEngineer(); // new function.
        } else if (data.employee === 'Intern') {
            PushIntern(); // New function.
        }
         else {
            renderRoster(); // new function.
        }
    })
};

// Creating Engineer prompt 
const PushEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter engineer's name",
            validate: confirmString,
        },
        {
            type: 'input',
            message: " Please enter engineer's ID number",
            name: 'id',
            validate: confirmNumbers,
        },
        {
            type: 'input',
            message: "Please enter engineer's email address",
            name: 'email',
            validate: confirmEmail,

        },
        {
            type: 'input',
            message: "Please enter engineer's Github ID",
            name: 'github',
            validate: confirmString,
        },
    ]).then((data) => {
        let engineer = new Engineer(data.name, data.id, data.email, data.github);
        roster.push(engineer);
        moreToRoster(); // new function
    })
};
const PushIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name:'name',
            message: "Please enter intern's name.",
            validate: confirmString,
        },
        {
            type: 'input',
            name:'id',
            message: "Please enter intern's id.",
            validate: confirmNumbers,
        },
        {
            type: 'input',
            name:'email',
            message: "Please enter intern's email.",
            validate: confirmEmail,
        },
        {
            type: 'input',
            name:'school',
            message: "Please enter intern's school.",
            validate: confirmString,
        },
    ]).then((data) => {
        let intern = new Intern(data.name, data.id, data.email, data.school);
        team.push(intern);
        moreToRoster();
    })
};
const moreToRoster = () => {
    inquirer.prompt([
        {
            type: 'list',
            name:'more',
            message: "Would you like to add more member to roster?",
            choice: ['yes', 'no']
        },
    ]).then((data) => {
        if(data.more === 'yes') {addteamRoster();} else {renderRoster();}
    }) 
};
const renderRoster = () => {
    let mockUphtml = generateHTML(team);
    fs.writeFileSync('index.html', mockUphtml, function(err) {

    });
}

init();