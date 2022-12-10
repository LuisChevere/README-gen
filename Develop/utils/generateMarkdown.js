// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None') {
    return `(https://img.shields.io/badge/License-${license}-blue.svg)`

  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None") {
    return `(https://opensource.org/licenses/${license})`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  
  <h1 align="center">#${answers.title}</h1>

  ${renderLicenseBadge(answers.license)}<br />

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)

## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage} 
  
  ## Contributions
  ${answers.contributions}

  ## Tests
  ${answers.test}
  
  ## License
  This application uses the ${answers.license} license.

  ## Questions
  Github:[${answers.github}](https://github.com/${answers.github})<br />
  <br />
  Email with any questions: ${answers.email}
`;
}


module.exports = generateMarkdown;
