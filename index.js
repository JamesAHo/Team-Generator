
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs")
const inquirer = require("inquirer");
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