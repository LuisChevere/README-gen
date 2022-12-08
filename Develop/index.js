// TODO: Include packages needed for this application
const { info } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');


// TODO: Create an array of questions for user input
const questions =
inquirer
.prompt([
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
        message: 'Provide instructions if someone would like to test your project',
    },
    {
        type: 'list',
        message: 'What license is used for your project?',
        name: 'license',
        choices: ['MIT License', 'Apache License 2.0', 'Boost Software License 1.0', 'Eclipse Public License 2.0'],
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

])
.then(data => info(data));

// TODO: Create a function to write README file
function writeToFile (README, data) {
    fs.writeFile(README, data, err => {
        if(err) {
            return console.log(err);
        }
        console.log("You've done it! Your README.md file has been created!!")
    })
}
// const writeFileA = util.inquirer(writeToFile);

// TODO: Create a function to initialize app
// function init() {

//     const userResponse = inquirer.prompt(questions);
//     console.log("Your responses: ", userResponse);

//     const userInfo = inquirer.prompt(userResponse);
//     console.log("Your Github user info: ", userInfo);

//     const markdown = generateMarkdown(userResponse, userInfo);
//     console.log(markdown);

// };

// Function call to initialize app
// init();
