// TODO: Include packages needed for this application
const { info } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do I install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can your project be used?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How can someone contribute to your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide instructions if someone would like to test your project:',
    },
    {
        type: 'list',
        message: 'What license is used for your project?',
        name: 'license',
        choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0', 'Eclipse Public License 2.0', "N/a"],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },

    ]

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then((answers) => {
        const readMeContent = generateMarkdown(answers);
        fs.writeFile("README.md", readMeContent, (err) => err ? console.log(err) : console.log("You've successfully created your README file!!") )
    })}

// Function call to initialize app
init()
